# 🧩 Guide d'Utilisation - Composants Atomic Design

## Import des Composants

### Via Barrel Exports (Recommandé)
```tsx
// Atoms
import { Button, Input, Select, Badge, Heading, Text } from '@/components/atoms';

// Molecules  
import { Card, MenuItem, CapacitySelector } from '@/components/molecules';
```

### Import Direct
```tsx
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/molecules/Card';
```

---

## 📚 Exemples d'Utilisation

### Button

```tsx
// Bouton primary avec loading
<Button 
  variant="primary" 
  size="lg"
  isLoading={isSubmitting}
  leftIcon={<SaveIcon />}
>
  Enregistrer
</Button>

// Bouton secondary pleine largeur
<Button 
  variant="secondary" 
  fullWidth
  onClick={handleClick}
>
  Annuler
</Button>

// Bouton outline avec icon à droite
<Button 
  variant="outline" 
  size="md"
  rightIcon={<ArrowRightIcon />}
>
  Continuer
</Button>
```

### Input

```tsx
// Input de base avec label
<Input 
  label="Email"
  type="email"
  placeholder="votre@email.com"
  required
/>

// Input avec icon et helper text
<Input 
  label="Téléphone"
  type="tel"
  variant="glass"
  leftIcon={<PhoneIcon />}
  helperText="Format: +33 6 12 34 56 78"
/>

// Input avec gestion d'erreur
<Input 
  label="Mot de passe"
  type="password"
  error={errors.password}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

### Select

```tsx
// Select simple
<Select 
  label="Ville"
  options={[
    { value: 'lille', label: 'Lille' },
    { value: 'paris', label: 'Paris' },
    { value: 'lyon', label: 'Lyon' },
  ]}
  value={city}
  onChange={(e) => setCity(e.target.value)}
/>

// Select avec placeholder et error
<Select 
  label="Durée"
  placeholder="Sélectionnez une durée"
  options={durationOptions}
  error="Veuillez sélectionner une durée"
  required
/>
```

### Badge

```tsx
// Badge végétarien
<Badge variant="vegetarian" size="sm">
  🌱 Végétarien
</Badge>

// Badge vegan
<Badge variant="vegan">
  🥗 Vegan
</Badge>

// Badge custom
<Badge variant="new" size="lg">
  ✨ Nouveau
</Badge>
```

### Typography

```tsx
// Heading avec gradient
<Heading as="h1" gradient align="center">
  Le Refuge Gourmand
</Heading>

// Heading avec shimmer effect
<Heading as="h2" shimmer>
  Nos Menus
</Heading>

// Text avec tailles
<Text size="xl" muted>
  Description du service
</Text>

// Label pour formulaire
<Label htmlFor="email" required>
  Adresse email
</Label>
```

### Card

```tsx
// Card simple
<Card variant="glass" padding="lg">
  <Heading as="h3">Titre</Heading>
  <Text>Contenu de la card</Text>
</Card>

// Card avec gradient border
<Card variant="gradient-border" padding="xl">
  <p>Contenu premium</p>
</Card>

// Card cliquable avec hover
<Card 
  variant="hover-lift" 
  hoverable
  onClick={() => console.log('clicked')}
>
  <p>Cliquez-moi</p>
</Card>

// Card avec animations
<Card 
  variant="gradient-border" 
  style={{ animationDelay: '0.2s' }}
  className="animate-slide-up"
>
  <p>Animation d'entrée</p>
</Card>
```

### MenuItem

```tsx
// Plat simple
<MenuItem 
  name="Magret de canard"
  description="Sauce aux cèpes et purée de céleri"
  price={28}
/>

// Plat végétarien
<MenuItem 
  name="Ravioles végétales"
  description="Légumes de saison"
  price={22}
  vegetarian
/>

// Plat vegan avec image
<MenuItem 
  name="Buddha Bowl"
  description="Quinoa, légumes rôtis"
  price={18}
  vegan
  image="/images/buddha-bowl.jpg"
/>

// Plat nouveau et populaire
<MenuItem 
  name="Burger du chef"
  description="Pain briché maison"
  price={24}
  isNew
  isPopular
/>
```

### CapacitySelector

```tsx
// Sélecteur de capacité complet
<CapacitySelector 
  selected={selectedCapacity}
  onChange={setSelectedCapacity}
/>

// Avec capacités personnalisées
<CapacitySelector 
  selected={capacity}
  capacities={[2, 4, 6, 8, 10]}
  onChange={handleCapacityChange}
  className="my-custom-class"
/>
```

---

## 🎨 Combinaisons Fréquentes

### Formulaire Complet

```tsx
<form onSubmit={handleSubmit}>
  <Card variant="gradient-border" padding="lg">
    <Heading as="h3" className="mb-6">
      Informations
    </Heading>
    
    <div className="space-y-6">
      <Input 
        label="Nom complet"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      
      <Input 
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        leftIcon={<MailIcon />}
        required
      />
      
      <Select 
        label="Ville"
        options={cityOptions}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      
      <Button 
        type="submit" 
        variant="primary" 
        size="lg"
        fullWidth
        isLoading={isSubmitting}
      >
        Valider
      </Button>
    </div>
  </Card>
</form>
```

### Section avec Cards

```tsx
<div className="grid md:grid-cols-3 gap-6">
  {items.map((item, index) => (
    <Card 
      key={item.id}
      variant="hover-lift"
      hoverable
      onClick={() => handleSelect(item)}
      style={{ animationDelay: `${index * 0.1}s` }}
      className="animate-fade-in"
    >
      <Heading as="h4" className="mb-2">
        {item.title}
      </Heading>
      <Text muted>{item.description}</Text>
      <Badge variant="new" className="mt-4">
        {item.badge}
      </Badge>
    </Card>
  ))}
</div>
```

### Menu avec Items

```tsx
<Card variant="gradient-border" padding="xl">
  <Heading as="h2" gradient className="mb-8">
    Menu du Jour
  </Heading>
  
  <div className="space-y-4">
    {dishes.map((dish) => (
      <MenuItem 
        key={dish.id}
        name={dish.name}
        description={dish.description}
        price={dish.price}
        vegetarian={dish.vegetarian}
        vegan={dish.vegan}
      />
    ))}
  </div>
</Card>
```

---

## 💡 Tips & Best Practices

### Consistency
- Utilisez toujours les mêmes variants pour des actions similaires
- `primary` pour les actions principales
- `outline` ou `ghost` pour les actions secondaires

### Accessibility
- Tous les composants supportent les props ARIA natives
- Les labels sont automatiques sur Input/Select
- Focus states sont gérés automatiquement

### Performance
- Les composants sont légers et optimisés
- Pas de re-render inutiles
- Tree shaking automatique

### Customisation
- Tous les composants acceptent `className` pour override
- Utilisez `cn()` pour merger proprement les classes
- Les variants peuvent être étendus facilement

---

## 🐛 Debugging

### Le composant ne s'affiche pas
```tsx
// ✅ Vérifier l'import
import { Button } from '@/components/atoms/Button';

// ✅ Vérifier que le composant est client si nécessaire
'use client';
```

### Les styles ne s'appliquent pas
```tsx
// ✅ Vérifier que globals.css est importé
import './globals.css';

// ✅ Vérifier que Tailwind config inclut le bon path
content: ['./components/**/*.{js,ts,jsx,tsx}']
```

### TypeScript errors
```tsx
// ✅ Importer les types si nécessaire
import type { ButtonVariant } from '@/components/atoms/Button';

// ✅ Utiliser les types exportés
const variant: ButtonVariant = 'primary';
```

---

**Enjoy coding! 🎨✨**

