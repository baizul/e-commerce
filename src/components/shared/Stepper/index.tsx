import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { HiCheck } from "react-icons/hi";

interface Props {
  steps: any;
  currentStep: number;
  show: boolean;
  classToOverride?: string;
  descClassName?: string;
}

const Stepper = ({
  steps,
  currentStep,
  show,
  classToOverride,
  descClassName,
}: Props) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  var size = isDesktop ? 24 : 20;

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 h-7 w-7 lg:h-10 lg:w-10 flex items-center justify-center py-3  ${
              step.selected
                ? "bg-crimson text-white font-bold border border-transparent"
                : index == currentStep && show
                ? "border-crimson"
                : "border-gray-500"
            }`}
          >
            {step.completed ? (
              <span className="text-xl font-bold text-white scale-75 lg:scale-100">
                <HiCheck size={22} />
              </span>
            ) : index == currentStep ? (
              show ? (
                <BsFillCircleFill
                  size={size}
                  className="rounded-full text-crimson"
                />
              ) : null
            ) : null}
          </div>
          <div
            className={classNames(
              "lg:text-base md:text-xs normal-case absolute top-0 lg:-top-4 text-center m-8 lg:mt-16 w-16 lg:w-32 text-[10px] font-medium",
              descClassName,
              step.completed ? "text-white" : "text-gray-400"
            )}
          >
            {step.description}
          </div>
        </div>
        {index !== newStep.length - 1 && (
          <div
            className={`flex-auto w-6 md:w-14 lg:w-20 border-t-2 transition duration-500 ease-in-out  ${
              step.completed ? "border-crimson" : "border-gray-500 "
            }  `}
          ></div>
        )}
      </div>
    );
  });

  return (
    <div
      className={classNames(
        "flex items-center justify-between mx-auto",
        classToOverride
      )}
    >
      {stepsDisplay}
    </div>
  );
};
export default Stepper;
