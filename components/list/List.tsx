'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Country } from '@/types';
import { fixUrl } from '@/utils';

export default function List({
  initialCountries,
}: {
  initialCountries: Country[];
}) {
  const [countries, setCountries] = useState(initialCountries);
  const [errorFlags, setErrorFlags] = useState<Record<string, boolean>>({});

  const handleDelete = (iso_code2: string) => {
    setCountries((prev) => prev.filter((c) => c.iso_code2 !== iso_code2));
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <AnimatePresence>
        {countries.map((country) => (
          <motion.li
            key={country.iso_code2}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            layout
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            {country.flag_url && !errorFlags[country.iso_code2] ? (
              <Image
                src={fixUrl(country.flag_url)}
                alt={country.name_ru}
                height={0}
                width={0}
                style={{ width: '30px', height: 'auto' }}
                onError={() => {
                  setErrorFlags((prev) => ({
                    ...prev,
                    [country.iso_code2]: true,
                  }));
                }}
              />
            ) : (
              <div
                style={{
                  width: 40,
                  height: 30,
                  backgroundColor: '#eee',
                  border: '1px solid #ccc',
                }}
              />
            )}
            <span style={{ marginLeft: '10px', flex: 1 }}>
              {country.name_ru}
            </span>
            <button
              onClick={() => handleDelete(country.iso_code2)}
              style={{ marginLeft: '10px', marginRight: '10px' }}
            >
              Удалить
            </button>
            <Link href={`/country/${country.iso_code2}`}>Подробнее</Link>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
