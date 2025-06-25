import { notFound } from 'next/navigation';
import { Country } from '@/types';
import Image from 'next/image';
import { fixUrl } from '@/utils';

export default async function CountryPage({
  params,
}: {
  params: { iso_code2: string };
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/countries`, {
    cache: 'no-store',
  });

  const countries: Country[] = await res.json();
  const country = countries.find((c) => c.iso_code2 === params.iso_code2);

  if (!country) return notFound();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>{country.name_ru}</h1>
      <Image
        src={fixUrl(country.flag_url)}
        alt={country.name_ru}
        height={0}
        width={0}
        style={{ width: '30px', height: 'auto' }}
      />
      <p style={{ marginTop: 20 }}>Код: {country.iso_code2}</p>
    </div>
  );
}
