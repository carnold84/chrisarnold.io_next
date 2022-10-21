import { Route, Routes } from "react-router-dom";
import DesignProject from "./DesignProject";
import DesignHome from "./DesignHome";

export interface Project {
  attributes: {
    id: string;
    order: number;
    path: string;
    tags: string[];
    thumbnail: string;
    title: string;
    type: string;
  };
  default: string;
  html: string;
}

interface Data {
  all: Project[];
  byId: {
    [id: string]: Project;
  };
}

const data: Data = {
  all: [],
  byId: {},
};

const modules: any = import.meta.glob("../../content/design/*.md", {
  eager: true,
});

for (const path in modules) {
  const project: Project = modules[path];
  data.all.push(project);
  data.byId[project.attributes.id] = project;
}

data.all.sort((a, b) => {
  return a.attributes.order - b.attributes.order;
});

const Design = () => {
  return (
    <Routes>
      <Route index element={<DesignHome projects={data.all} />} />
      {data.all.map((project) => {
        return (
          <Route
            key={project.attributes.id}
            path={project.attributes.path}
            element={<DesignProject data={project} />}
          />
        );
      })}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default Design;
