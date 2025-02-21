import React from "react";

const About = () => (
  <section id="about" className="bg-light py-5">
    <div className="container">
      <h2>About Me</h2>
      <p>I am currently a student at Lyceum of Alabang.</p>

      <div className="row">
        <div className="col-md-6">
          <h3>Education</h3>
          <ul>
            <li>High School Graduate at Southernside Montessori School</li>
            <li>Outstanding Achievement in Mathematics</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>School Activities</h3>
          <ul>
            <li>Member, Basketball Team</li>
          </ul>
        </div>
      </div>

      <h3>Skills</h3>
      <ul>
        <li>Leadership and Teamwork</li>
        <li>Problem-solving</li>
        <li>Time Management</li>
      </ul>
    </div>
  </section>
);

export default About;
