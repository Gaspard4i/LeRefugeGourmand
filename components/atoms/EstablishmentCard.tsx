import Link from 'next/link';

type Props = {
  id: string;
  name: string;
  address?: string;
};

export default function EstablishmentCard({ id, name, address }: Props) {
  return (
    <article className="group rounded-xl border border-champagne-gold/20 bg-slate-night/60 p-4 flex items-center gap-4 hover:shadow-lg hover:shadow-champagne-gold/10 transition-all">
      <div className="w-16 h-16 flex-shrink-0 rounded-full bg-champagne-gold/10 flex items-center justify-center text-champagne-gold font-serif text-lg">
        {name.charAt(0)}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-champagne-gold font-semibold truncate">{name}</h4>
        {address && <div className="text-cream-light/70 text-sm truncate">{address}</div>}
      </div>

      <div className="flex-shrink-0">
        <Link href={`/reservation?city=${id}`} className="inline-block px-3 py-2 text-sm bg-champagne-gold text-slate-night rounded-lg font-semibold">Réserver</Link>
      </div>
    </article>
  );
}

