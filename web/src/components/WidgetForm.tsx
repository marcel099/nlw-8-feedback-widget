import { useState } from "react";

import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";
import { CloseButton } from "./CloseButton";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div
      className="
        bg-zinc-900 p-4 relative rounded-2xl
        flex flex-col items-center shadow-lg
        w-[calc(100vw-2rem)] md:w-auto
      "
    >
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => (
            <button
              key={key}
              type="button"
              className="
                bg-zinc-800 rounded-lg py-5 w-24
                flex-1 flex-col items-center gap-2
                border-2 border-transparent hover:border-brand-500
                focus:border-brand-500 focus:outline-none
              "
              onClick={() => setFeedbackType(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          ))}
        </div>
      ) : (
        <p>Hello World</p>
      )}

      <footer>
        Feito com 🤍 pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          RocketSeat
        </a>
      </footer>
    </div>
  );
}