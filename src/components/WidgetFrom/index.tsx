
import bugImage from "../../assets/Bug.svg"
import ideaImage from "../../assets/Idea.svg"
import otherImage from "../../assets/Thought.svg"
import { useState } from "react";
import { FeedbackTypesStep } from "./Steps/FeedbackTypeStep";



export const feedbackTypes = {
  BUG:{
    title: "Problemas",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto"
    }
  },
  IDEA:{
    title: "Ideias",
    image: {
      source: ideaImage,
      alt: "Imagem de uma Lâmpada"
    }
  },
  OTHER:{
    title: "Outro",
    image: {
      source: otherImage,
      alt: "Imagem de um balão de pensamento"
    }
  },
}

export type FeedbackProps = keyof typeof feedbackTypes

export function WidgetForm() {

  const [ feedbackType, setFeedbackType ] = useState<FeedbackProps | null>(null)


  return (
    <div className="bg-zinc-600 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     

      {!feedbackType ? (
        <FeedbackTypesStep  onFeedbackTypeChanged={setFeedbackType}/>
      ) : (
        <h1>Hello</h1>
      )}
      <footer>
        Feito com ❤️ pelo
        <a
          className="underline underline-offset-2"
          target="_black"
          href="https://github.com/danktt"
        >
  
          Danilo Miranda
        </a>
      </footer>
    </div>
  );
}
