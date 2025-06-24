import { Country } from '@/types';
import { fixUrl } from '@/utils';
import Image from 'next/image';

export default async function CountryPage({
  params,
}: {
  params: { iso_code2: string };
}) {
  const res = await fetch(
    'https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json',
    { cache: 'no-store' }
  );
  const countries: Country[] = (await res.json()).slice(0, 20);
  const country = countries.find((c) => c.iso_code2 === params.iso_code2);

  if (!country) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Страна не найдена
      </div>
    );
  }

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
