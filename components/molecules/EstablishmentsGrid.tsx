import EstablishmentCard from '@/components/atoms/EstablishmentCard';
import { CITIES } from '@/data/cities';

export default function EstablishmentsGrid() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CITIES.map((c) => (
            <EstablishmentCard key={c.id} id={c.id} name={c.name} address={c.address} />
          ))}
        </div>
      </div>
    </section>
  );
}

