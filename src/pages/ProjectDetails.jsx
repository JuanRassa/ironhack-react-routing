// import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

const ProjectDetails = ({ projectsData }) => {
  const { projectId } = useParams();

  const singleProject = projectsData.find(project => project._id === projectId);

  return (
    <>
      <h2>ProjectDetails</h2>

      <Link to='/projects'>Back to projects list</Link>
      {!singleProject && <h3>Project Not Found :(</h3>}
      {singleProject && (
        <div>
          <h3>Tech Stack: {singleProject.technologies}</h3>
          <p>{singleProject.description}</p>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
