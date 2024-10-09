import { usePathname } from "next/navigation";

const useLocalization = (defaultLocale = "en-US") => {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || defaultLocale;
  return { locale };
};

export default useLocalization;
