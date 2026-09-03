"use client";

import {
  useState,
  type ReactNode,
} from "react";

import {
  isWireCount,
  solveWireDetailed,
  wireColors,
  wireLights,
  type WireColor,
  type WireCount,
  type WireLight,
  type WireSolution,
} from "@/data/bombanana/wireRules";

import {
  arrowLights,
  arrowNumbers,
  getArrowDirection,
  getDirectionLabel,
  isArrowNumber,
  type ArrowLight,
  type ArrowNumber,
  type Direction,
} from "@/data/bombanana/arrowRules";

import {
  calculateResult,
  calculatorLights,
  getCalculatorAnswer,
  getParity,
  type CalculatorKey,
  type CalculatorLight,
  type CalculatorOperator,
  type Parity,
} from "@/data/bombanana/calculatorRules";


export type BombananaModuleType =
  | "wire"
  | "arrow"
  | "calculator";


export type BombananaModuleSolverProps = {
  defaultModule?: BombananaModuleType;
};


type WireSlot =
  | WireColor
  | "";


const moduleTabs = [
  {
    id: "wire",
    label: "Wire",
  },
  {
    id: "arrow",
    label: "Direction",
  },
  {
    id: "calculator",
    label: "Calculator",
  },
] as const satisfies readonly {
  id: BombananaModuleType;
  label: string;
}[];


/* ========================================
 * Main Solver
 * ====================================== */

export default function BombananaModuleSolver({
  defaultModule = "wire",
}: BombananaModuleSolverProps) {
  const [
    activeModule,
    setActiveModule,
  ] =
    useState<BombananaModuleType>(
      defaultModule
    );


  return (
    <section className="rounded-xl border bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b p-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-base font-semibold">
          Module Solver
        </div>

        <div
          className="grid grid-cols-3 gap-1 rounded-lg bg-gray-100 p-1"
          role="tablist"
          aria-label="BOMBANANA module type"
        >
          {moduleTabs.map(
            (tab) => {
              const active =
                activeModule === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`module-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`module-panel-${tab.id}`}
                  onClick={() =>
                    setActiveModule(
                      tab.id
                    )
                  }
                  className={[
                    "rounded-md px-3 py-1.5 text-sm font-medium transition",
                    active
                      ? "bg-white text-black shadow-sm"
                      : "text-gray-500 hover:text-black",
                  ].join(" ")}
                >
                  {tab.label}
                </button>
              );
            }
          )}
        </div>
      </div>


      <div className="p-3 sm:p-4">
        {activeModule === "wire" && (
          <div
            id="module-panel-wire"
            role="tabpanel"
            aria-labelledby="module-tab-wire"
          >
            <WireSolver />
          </div>
        )}

        {activeModule === "arrow" && (
          <div
            id="module-panel-arrow"
            role="tabpanel"
            aria-labelledby="module-tab-arrow"
          >
            <ArrowSolver />
          </div>
        )}

        {activeModule ===
          "calculator" && (
          <div
            id="module-panel-calculator"
            role="tabpanel"
            aria-labelledby="module-tab-calculator"
          >
            <CalculatorSolver />
          </div>
        )}
      </div>
    </section>
  );
}


/* ========================================
 * Wire
 * ====================================== */

function createEmptyWires(
  count: WireCount
): WireSlot[] {
  return Array<WireSlot>(
    count
  ).fill("");
}


function WireSolver() {
  const [
    count,
    setCount,
  ] =
    useState<WireCount>(3);

  const [
    wires,
    setWires,
  ] =
    useState<WireSlot[]>(
      () => createEmptyWires(3)
    );

  const [
    light,
    setLight,
  ] =
    useState<WireLight | "">("");

  const [
    answer,
    setAnswer,
  ] =
    useState<WireSolution | null>(
      null
    );

  const [
    message,
    setMessage,
  ] =
    useState("");


  function clearResult() {
    setAnswer(null);
    setMessage("");
  }


  function changeCount(
    nextCount: WireCount
  ) {
    setCount(
      nextCount
    );

    setWires(
      (current) =>
        Array.from(
          {
            length:
              nextCount,
          },
          (_, index) =>
            current[index] ?? ""
        )
    );

    clearResult();
  }


  function handleCountChange(
    rawValue: string
  ) {
    const nextCount =
      Number(rawValue);

    if (
      !isWireCount(nextCount)
    ) {
      setAnswer(null);

      setMessage(
        "Wire modules use either 3 or 4 cables."
      );

      return;
    }

    changeCount(
      nextCount
    );
  }


  function changeWire(
    index: number,
    color: WireSlot
  ) {
    setWires(
      (current) => {
        const next =
          [...current];

        next[index] =
          color;

        return next;
      }
    );

    clearResult();
  }


  function solve() {
    if (
      wires.some(
        (wire) =>
          wire === ""
      )
    ) {
      setAnswer(null);

      setMessage(
        "Select every wire color."
      );

      return;
    }


    if (!light) {
      setAnswer(null);

      setMessage(
        "Select the LED color."
      );

      return;
    }


    const selectedWires =
      wires.filter(
        (
          wire
        ): wire is WireColor =>
          wire !== ""
      );


    const result =
      solveWireDetailed(
        selectedWires,
        light
      );


    /*
     * Use property narrowing instead of:
     *
     * if (!result.ok)
     *
     * This is more reliable across TypeScript
     * configurations for the discriminated union.
     */
    if ("error" in result) {
      setAnswer(null);

      switch (
        result.error
      ) {
        case "invalid-wire-count":
          setMessage(
            "Wire modules use either 3 or 4 cables. Re-check the cable count."
          );

          return;


        case "target-color-missing":
          setMessage(
            `${capitalize(
              result.targetColor
            )} is the target color, but it is missing from the selected cable order. Re-check the colors from left to right.`
          );

          return;


        case "target-color-duplicated":
          setMessage(
            `${capitalize(
              result.targetColor
            )} appears more than once. Re-check the cable colors before cutting.`
          );

          return;
      }
    }


    setAnswer(
      result.solution
    );

    setMessage("");
  }


  function reset() {
    setCount(3);

    setWires(
      createEmptyWires(3)
    );

    setLight("");

    setAnswer(null);

    setMessage("");
  }


  return (
    <div className="space-y-3">
      <PanelIntro>
        Count + LED + cables from
        left to right
      </PanelIntro>


      <div className="grid gap-2 sm:grid-cols-2">
        <CompactField label="Wire count">
          <select
            value={count}
            onChange={(event) =>
              handleCountChange(
                event.target.value
              )
            }
            className={
              inputClassName
            }
          >
            <option value={3}>
              3 wires
            </option>

            <option value={4}>
              4 wires
            </option>
          </select>
        </CompactField>


        <CompactField label="LED">
          <select
            value={light}
            onChange={(event) => {
              setLight(
                event.target
                  .value as
                  | WireLight
                  | ""
              );

              clearResult();
            }}
            className={
              inputClassName
            }
          >
            <option
              value=""
              disabled
            >
              Select color
            </option>

            {wireLights.map(
              (color) => (
                <option
                  key={color}
                  value={color}
                >
                  {capitalize(
                    color
                  )}
                </option>
              )
            )}
          </select>
        </CompactField>
      </div>


      <div>
        <div className="mb-1.5 text-xs font-medium text-gray-600">
          Wire colors
        </div>

        <div
          className={[
            "grid gap-2",
            count === 3
              ? "grid-cols-3"
              : "grid-cols-2 sm:grid-cols-4",
          ].join(" ")}
        >
          {wires.map(
            (
              wire,
              index
            ) => (
              <label
                key={index}
                className="min-w-0"
              >
                <span className="mb-1 block text-[11px] font-medium text-gray-400">
                  #{index + 1}
                </span>

                <select
                  value={wire}
                  aria-label={`Wire ${index + 1} color`}
                  onChange={(
                    event
                  ) =>
                    changeWire(
                      index,
                      event.target
                        .value as WireSlot
                    )
                  }
                  className={
                    inputClassName
                  }
                >
                  <option
                    value=""
                    disabled
                  >
                    Color
                  </option>

                  {wireColors.map(
                    (color) => {
                      const
                        usedElsewhere =
                          wires.some(
                            (
                              selected,
                              selectedIndex
                            ) =>
                              selectedIndex !==
                                index &&
                              selected ===
                                color
                          );

                      return (
                        <option
                          key={color}
                          value={color}
                          disabled={
                            usedElsewhere
                          }
                        >
                          {capitalize(
                            color
                          )}
                        </option>
                      );
                    }
                  )}
                </select>
              </label>
            )
          )}
        </div>
      </div>


      <ActionRow
        onSolve={solve}
        onReset={reset}
      />


      {message && (
        <ErrorStrip>
          {message}
        </ErrorStrip>
      )}


      {answer && (
        <AnswerStrip>
          Cut wire #
          {answer.position}

          <span className="font-normal text-white/60">
            {" "}
            ·{" "}
            {capitalize(
              answer.color
            )}
          </span>
        </AnswerStrip>
      )}
    </div>
  );
}


/* ========================================
 * Direction
 * ====================================== */

function ArrowSolver() {
  const [
    light,
    setLight,
  ] =
    useState<
      ArrowLight | ""
    >("");

  const [
    number,
    setNumber,
  ] =
    useState<
      ArrowNumber | ""
    >("");

  const [
    answer,
    setAnswer,
  ] =
    useState<
      Direction | null
    >(null);

  const [
    message,
    setMessage,
  ] =
    useState("");


  function clearResult() {
    setAnswer(null);
    setMessage("");
  }


  function changeNumber(
    rawValue: string
  ) {
    if (
      rawValue === ""
    ) {
      setNumber("");
      clearResult();

      return;
    }


    const nextNumber =
      Number(rawValue);


    if (
      !isArrowNumber(
        nextNumber
      )
    ) {
      setNumber("");
      setAnswer(null);

      setMessage("Direction uses Braille numbers 1 through 9.");

      return;
    }


    setNumber(
      nextNumber
    );

    clearResult();
  }


  function solve() {
    if (!light) {
      setAnswer(null);

      setMessage(
        "Select the LED color."
      );

      return;
    }


    if (
      number === ""
    ) {
      setAnswer(null);

      setMessage(
        "Select the Braille number."
      );

      return;
    }


    const direction =
      getArrowDirection(
        light,
        number
      );


    setAnswer(
      direction
    );

    setMessage("");
  }


  function reset() {
    setLight("");
    setNumber("");
    setAnswer(null);
    setMessage("");
  }


  return (
    <div className="space-y-3">
      <PanelIntro>
        LED + current Braille number
      </PanelIntro>


      <div className="grid gap-2 sm:grid-cols-2">
        <CompactField label="LED">
          <select
            value={light}
            onChange={(event) => {
              setLight(
                event.target
                  .value as
                  | ArrowLight
                  | ""
              );

              clearResult();
            }}
            className={
              inputClassName
            }
          >
            <option
              value=""
              disabled
            >
              Select color
            </option>

            {arrowLights.map(
              (color) => (
                <option
                  key={color}
                  value={color}
                >
                  {capitalize(
                    color
                  )}
                </option>
              )
            )}
          </select>
        </CompactField>


        <CompactField
          label="Braille"
          note="No 8"
        >
          <select
            value={number}
            onChange={(event) =>
              changeNumber(
                event.target.value
              )
            }
            className={
              inputClassName
            }
          >
            <option
              value=""
              disabled
            >
              Select number
            </option>

            {arrowNumbers.map(
              (value) => (
                <option
                  key={value}
                  value={value}
                >
                  {value}
                </option>
              )
            )}
          </select>
        </CompactField>
      </div>


      <ActionRow
        onSolve={solve}
        onReset={reset}
      />


      {message && (
        <ErrorStrip>
          {message}
        </ErrorStrip>
      )}


      {answer && (
        <AnswerStrip>
          Press{" "}
          {getDirectionLabel(
            answer
          )}
        </AnswerStrip>
      )}
    </div>
  );
}


/* ========================================
 * Calculator
 * ====================================== */

function CalculatorSolver() {
  const [
    a,
    setA,
  ] =
    useState("");

  const [
    b,
    setB,
  ] =
    useState("");

  const [
    operator,
    setOperator,
  ] =
    useState<CalculatorOperator>(
      "+"
    );

  const [
    result,
    setResult,
  ] =
    useState<
      number | null
    >(null);

  const [
    parity,
    setParity,
  ] =
    useState<
      Parity | null
    >(null);

  const [
    light,
    setLight,
  ] =
    useState<
      CalculatorLight | ""
    >("");

  const [
    finalAnswer,
    setFinalAnswer,
  ] =
    useState<
      CalculatorKey | null
    >(null);

  const [
    message,
    setMessage,
  ] =
    useState("");


  function clearCalculation() {
    setResult(null);
    setParity(null);
    setLight("");
    setFinalAnswer(null);
    setMessage("");
  }


  function calculate() {
    const first =
      parseInteger(a);

    const second =
      parseInteger(b);


    if (
      first === null ||
      second === null
    ) {
      setResult(null);
      setParity(null);
      setFinalAnswer(null);

      setMessage(
        "Enter two whole numbers."
      );

      return;
    }


    const nextResult =
      calculateResult(
        first,
        second,
        operator
      );

    const nextParity =
      getParity(
        nextResult
      );


    setResult(
      nextResult
    );

    setParity(
      nextParity
    );

    /*
     * The LED belongs to stage two.
     * Every newly calculated equation
     * therefore starts with no LED.
     */
    setLight("");

    setFinalAnswer(null);

    setMessage("");
  }


  function changeLight(
    nextLight:
      | CalculatorLight
      | ""
  ) {
    setLight(
      nextLight
    );

    setMessage("");


    if (
      !nextLight ||
      result === null ||
      parity === null
    ) {
      setFinalAnswer(null);

      return;
    }


    const answer =
      getCalculatorAnswer(
        nextLight,
        parity
      );


    setFinalAnswer(
      answer
    );


    /*
     * 0 is a valid Calculator answer.
     * Only null means no matching rule.
     */
    if (
      answer === null
    ) {
      setMessage(
        "No matching final-key rule found."
      );
    }
  }


  function reset() {
    setA("");
    setB("");

    setOperator("+");

    setResult(null);
    setParity(null);

    setLight("");

    setFinalAnswer(null);

    setMessage("");
  }


  return (
    <div className="space-y-3">
      <PanelIntro>
        Equation first, LED second
      </PanelIntro>


      <div className="grid grid-cols-[1fr_auto_1fr] gap-2">
        <input
          type="number"
          step={1}
          inputMode="numeric"
          value={a}
          onChange={(event) => {
            setA(
              event.target.value
            );

            clearCalculation();
          }}
          placeholder="First"
          aria-label="First number"
          className={
            inputClassName
          }
        />


        <select
          value={operator}
          onChange={(event) => {
            setOperator(
              event.target
                .value as CalculatorOperator
            );

            clearCalculation();
          }}
          aria-label="Operator"
          className={
            operatorClassName
          }
        >
          <option value="+">
            +
          </option>

          <option value="-">
            −
          </option>
        </select>


        <input
          type="number"
          step={1}
          inputMode="numeric"
          value={b}
          onChange={(event) => {
            setB(
              event.target.value
            );

            clearCalculation();
          }}
          placeholder="Second"
          aria-label="Second number"
          className={
            inputClassName
          }
        />
      </div>


      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={calculate}
          className={
            primaryButtonClassName
          }
        >
          Calculate
        </button>


        {result !== null &&
          parity !== null && (
            <div className="rounded-md border bg-gray-50 px-3 py-1.5 text-sm">
              Enter{" "}
              <strong>
                {result}
              </strong>

              <span className="ml-1 text-gray-400">
                ·{" "}
                {capitalize(
                  parity
                )}
              </span>
            </div>
          )}


        <ResetButton
          onClick={reset}
        />
      </div>


      {result !== null &&
        parity !== null && (
          <div className="grid gap-2 border-t pt-3 sm:grid-cols-2 sm:items-end">
            <CompactField label="LED after result">
              <select
                value={light}
                onChange={(
                  event
                ) =>
                  changeLight(
                    event.target
                      .value as
                      | CalculatorLight
                      | ""
                  )
                }
                className={
                  inputClassName
                }
              >
                <option
                  value=""
                  disabled
                >
                  Select color
                </option>

                {calculatorLights.map(
                  (color) => (
                    <option
                      key={
                        color
                      }
                      value={
                        color
                      }
                    >
                      {capitalize(
                        color
                      )}
                    </option>
                  )
                )}
              </select>
            </CompactField>


            {finalAnswer !==
            null ? (
              <AnswerStrip>
                Press{" "}
                {finalAnswer}
              </AnswerStrip>
            ) : (
              <div className="rounded-md border border-dashed px-3 py-2 text-sm text-gray-400">
                Select the new LED
                for the final key.
              </div>
            )}
          </div>
        )}


      {message && (
        <ErrorStrip>
          {message}
        </ErrorStrip>
      )}
    </div>
  );
}


/* ========================================
 * Shared UI
 * ====================================== */

function PanelIntro({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="text-xs text-gray-400">
      {children}
    </div>
  );
}


function CompactField({
  label,
  note,
  children,
}: {
  label: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-1 flex items-center justify-between gap-2 text-xs font-medium text-gray-600">
        <span>
          {label}
        </span>

        {note && (
          <span className="font-normal text-gray-400">
            {note}
          </span>
        )}
      </span>

      {children}
    </label>
  );
}


function ActionRow({
  onSolve,
  onReset,
}: {
  onSolve: () => void;
  onReset: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onSolve}
        className={
          primaryButtonClassName
        }
      >
        Solve
      </button>

      <ResetButton
        onClick={onReset}
      />
    </div>
  );
}


function ResetButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        resetButtonClassName
      }
    >
      Reset
    </button>
  );
}


function AnswerStrip({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      aria-live="polite"
      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white"
    >
      <span className="mr-2 text-[10px] font-medium uppercase tracking-wide text-white/50">
        Answer
      </span>

      {children}
    </div>
  );
}


function ErrorStrip({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      role="alert"
      className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
    >
      {children}
    </div>
  );
}


/* ========================================
 * Helpers
 * ====================================== */

function parseInteger(
  value: string
): number | null {
  const trimmed =
    value.trim();


  if (!trimmed) {
    return null;
  }


  const parsed =
    Number(trimmed);


  if (
    !Number.isFinite(
      parsed
    ) ||
    !Number.isInteger(
      parsed
    )
  ) {
    return null;
  }


  return parsed;
}


function capitalize(
  value: string
): string {
  if (!value) {
    return value;
  }


  return (
    value
      .charAt(0)
      .toUpperCase() +
    value.slice(1)
  );
}


/* ========================================
 * Styles
 * ====================================== */

const inputClassName =
  "w-full min-w-0 rounded-md border bg-white px-3 py-2 text-sm outline-none transition focus:border-black";


const operatorClassName =
  "rounded-md border bg-white px-3 py-2 text-sm outline-none transition focus:border-black";


const primaryButtonClassName =
  "rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800";


const resetButtonClassName =
  "rounded-md px-2 py-2 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-black";