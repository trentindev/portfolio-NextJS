import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { YouTubeIcon } from "./icons/YoutubeIcon";

const Code = (props: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono text-primary border hover:bg-accent/50 transition-colors border-accent p-0.5 rounded-md"
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Popol</h2>
        <h3 className="text-3xl font-caption">
          Développeur Logiciel et créateur Web
        </h3>
        <p className="text-base">
          Bonjour, je m'appelle Paul Hiscecour et J'aime créer du contenu sur{" "}
          <Link href="">
            <Code>
              <YouTubeIcon size={16} className="inline" />
              Youtube
            </Code>
          </Link>{" "}
          et sur{" "}
          <Link href="">
            <Code>
              <GithubIcon size={14} className="inline" />
              GitHub
            </Code>
          </Link>
          . J'aime aussi les poireaux et Molie.
        </p>
      </div>
      <div className="flex-[1]">
        <img
          src="https://cdn.discordapp.com/attachments/1134206420947054772/1229454354822467594/laurent7939_An_ultra_realistic_photo_of_a_developer_on_a_neutra_ade79bf6-30e5-4caa-b7e3-5735236fe207.png?ex=662fbd98&is=661d4898&hm=cac26c265c90e86312c12f963d65fb8479265e1410ddd04aa738c5cabfae3b96&"
          className="w-full h-auto max-w-sm"
          alt="popol's picture"
        />
      </div>
    </Section>
  );
};