// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;
                    // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                    getInstruction(
                      "mashedPotatoes",
                      1,
                      () => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                      },
                      (error) => console.log(error)
                    );
                    // Instead, we could also directly print the variable in the previous callback like this, but we wouldn't get the setTimeout effect
                    /* document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`; */
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
getInstruction("steak", 0, (step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  getInstruction("steak", 1, (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    getInstruction("steak", 2, (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      getInstruction(
        "steak",
        3,
        (step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
          getInstruction(
            "steak",
            4,
            (step4) => {
              document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
              // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
              getInstruction(
                "steak",
                5,
                (step5) => {
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>${step5}</li>`;
                  // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                  getInstruction(
                    "steak",
                    6,
                    (step6) => {
                      document.querySelector(
                        "#steak"
                      ).innerHTML += `<li>${step6}</li>`;
                      // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                      getInstruction(
                        "steak",
                        7,
                        (step7) => {
                          document.querySelector(
                            "#steak"
                          ).innerHTML += `<li>${step7}</li>`;
                          // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                          getInstruction(
                            "steak",
                            1,
                            () => {
                              document.querySelector(
                                "#steak"
                              ).innerHTML += `<li>Stake is ready!</li>`;
                            },
                            (error) => console.log(error)
                          );
                          // Instead, we could also directly print the variable in the previous callback like this, but we wouldn't get the setTimeout effect
                          /* document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`; */
                        },
                        (error) => console.log(error)
                      );
                    },
                    (error) => console.log(error)
                  );
                },
                (error) => console.log(error)
              );
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    });
  });
});

// Iteration 3 using async/await
getInstruction("brusselsSprouts", 0, (step0) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;
  getInstruction("brusselsSprouts", 1, (step1) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
    getInstruction("brusselsSprouts", 2, (step2) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction(
        "brusselsSprouts",
        3,
        (step3) => {
          document.querySelector(
            "#brusselsSprouts"
          ).innerHTML += `<li>${step3}</li>`;
          getInstruction(
            "brusselsSprouts",
            4,
            (step4) => {
              document.querySelector(
                "#brusselsSprouts"
              ).innerHTML += `<li>${step4}</li>`;
              // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
              getInstruction(
                "brusselsSprouts",
                5,
                (step5) => {
                  document.querySelector(
                    "#brusselsSprouts"
                  ).innerHTML += `<li>${step5}</li>`;
                  // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                  getInstruction(
                    "brusselsSprouts",
                    6,
                    (step6) => {
                      document.querySelector(
                        "#brusselsSprouts"
                      ).innerHTML += `<li>${step6}</li>`;
                      // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                      getInstruction(
                        "brusselsSprouts",
                        7,
                        (step7) => {
                          document.querySelector(
                            "#brusselsSprouts"
                          ).innerHTML += `<li>${step7}</li>`;
                          // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                          getInstruction(
                            "brusselsSprouts",
                            1,
                            () => {
                              document.querySelector(
                                "#brusselsSprouts"
                              ).innerHTML += `<li>Brussels sprouts</li>`;
                            },
                            (error) => console.log(error)
                          );
                          // Instead, we could also directly print the variable in the previous callback like this, but we wouldn't get the setTimeout effect
                          /* document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`; */
                        },
                        (error) => console.log(error)
                      );
                    },
                    (error) => console.log(error)
                  );
                },
                (error) => console.log(error)
              );
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    });
  });
});

// Bonus 2 - Promise all
getInstruction("broccoli", 0, (step0) => {
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  getInstruction("broccoli", 1, (step1) => {
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "broccoli",
      2,
      (step2) => {
        document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "broccoli",
          3,
          (step3) => {
            document.querySelector(
              "#broccoli"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "broccoli",
              4,
              (step4) => {
                document.querySelector(
                  "#broccoli"
                ).innerHTML += `<li>${step4}</li>`;
                // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                getInstruction(
                  "broccoli",
                  5,
                  (step5) => {
                    document.querySelector(
                      "#broccoli"
                    ).innerHTML += `<li>${step5}</li>`;
                    // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                    getInstruction(
                      "broccoli",
                      6,
                      (step7) => {
                        document.querySelector(
                          "#broccoli"
                        ).innerHTML += `<li>${step7}</li>`;
                        // Here we repeat the step 1 so we don't enter the error in the getInstruction() function. We don't care about the steps bc we just want to print a specific message
                        getInstruction(
                          "broccoli",
                          1,
                          () => {
                            document.querySelector(
                              "#broccoli"
                            ).innerHTML += `<li>Broccoli is ready!</li>`;
                          },
                          (error) => console.log(error)
                        );
                        // Instead, we could also directly print the variable in the previous callback like this, but we wouldn't get the setTimeout effect
                        /* document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`; */
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  });
});
