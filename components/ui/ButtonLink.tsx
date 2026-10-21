/** BOTÃO-LINK — dois estilos: "primary" (verde neon) e "ghost" (contorno fino). */
import Link from "next/link";

const styles = {
  primary: "bg-neon text-ink hover:bg-white hover:shadow-[0_0_32px_#C7FF3666]",
  ghost: "border border-white/20 text-snow hover:border-neon hover:text-neon",
};

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: keyof typeof styles }) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${styles[variant]}`}>
      {children}
    </Link>
  );
}
