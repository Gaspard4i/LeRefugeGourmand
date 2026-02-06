'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from '@/types';
import { USERS } from '../data/users';

type AuthContextValue = {
  user: User | null;
  users: User[];
  login: (id: string) => void;
  logout: () => void;
  register: (payload: Partial<User>) => User;
  updateUser: (payload: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = 'lrg_current_user';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(USERS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      else localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  }, [user]);

  const login = (id: string) => {
    const found = users.find((u) => u.id === id) || null;
    setUser(found);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (payload: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated: User = { ...prev, ...payload, updatedAt: new Date() } as User;
      // keep users array in sync
      setUsers((prevUsers) => prevUsers.map((u) => (u.id === updated.id ? updated : u)));
      return updated;
    });
  };

  const register = (payload: Partial<User>) => {
    const newUser: User = {
      id: `u_${Date.now()}`,
      email: payload.email || `user_${Date.now()}@example.com`,
      firstName: payload.firstName || 'Invité',
      lastName: payload.lastName || '',
      phone: payload.phone,
      loyaltyPoints: payload.loyaltyPoints ?? 0,
      newsletterOptIn: payload.newsletterOptIn ?? false,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;

    setUsers((prev) => [newUser, ...prev]);
    setUser(newUser);
    return newUser;
  };

  return <AuthContext.Provider value={{ user, users, login, logout, register, updateUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
