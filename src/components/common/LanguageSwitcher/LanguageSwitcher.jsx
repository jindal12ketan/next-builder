'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changeLanguage = (locale) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('locale', locale);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${window.location.pathname}${query}`);
  };

  return (
    <div>
      {['us-es', 'us-en', 'ca-en', 'qc-en', 'qc-fr'].map((locale) => (
        <button key={locale} onClick={() => changeLanguage(locale)}>
          {locale}
        </button>
      ))}
    </div>
  );
}