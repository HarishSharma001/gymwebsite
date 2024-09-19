import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        "Join us for energizing workout sessions designed to boost your fitness and build community!"
        </p>
        <img src="/cbum.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        <b>Dynamic Workouts </b>
        Our bootcamp sessions are designed to keep you engaged and challenged. Each class combines a mix of strength training, cardio, and agility exercises to provide a full-body workout. 
        </p>
        <div className="bootcamps">
          <div>
            <h4>All Fitness Levels Welcome</h4>
            <p>
            Each exercise can be modified to suit individual capabilities, ensuring everyone can participate and benefit from the sessions.
            </p>
          </div>
          <div>
            <h4>Expert Trainers</h4>
            <p>
            They provide personalized attention, motivation, and expertise, helping you perfect your form and maximize results while ensuring safety throughout each workout.
            </p>
          </div>
          <div>
            <h4>Flexible Schedule</h4>
            <p>
            We understand that everyone has busy lives, which is why we offer multiple class times throughout the week. With morning, afternoon, and evening sessions, you can easily find a time that fits your schedule.
            </p>
          </div>
          <div>
            <h4>Nutrition Guidance</h4>
            <p>
            To complement your workouts, we provide access to nutrition tips and meal planning resources. Learn how to fuel your body effectively, make healthier choices, and enhance your overall wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
