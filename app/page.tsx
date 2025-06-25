import List from '@/components/list/List';
import { Country } from '../types';

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/countries`, {
    next: { revalidate: 600 },
  });
  const countries: Country[] = await res.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 pb-20 gap-18 sm:p-0 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
        <List initialCountries={countries} />
      </main>
    </div>
  );
}
