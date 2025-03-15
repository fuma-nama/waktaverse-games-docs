import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div className="size-6">
          <Image src="/images/logo.svg" alt="Logo" width={24} height={24} />
        </div>
        Waktaverse Games Docs
      </>
    ),
  },
  // links: [
  //   {
  //     text: "Documentation",
  //     url: "/",
  //     active: "nested-url",
  //   },
  // ],
};
