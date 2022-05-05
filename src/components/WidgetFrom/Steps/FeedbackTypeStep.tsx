import { FeedbackProps, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackProps) => void;
}

export function FeedbackTypesStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className=" flex-1 flex flex-col items-center py-5 w-24 bg-slate-700 rounded-lg gap-2 border-2 border-transparent hover:border-teal-500 focus:border-teal-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackProps)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
