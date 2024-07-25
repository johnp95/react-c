import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";

const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
            "Content-Type": "applicaiton/json",
        },
        body: JSON.stringify(newJob),
    });
    return;
};

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route
                    path="/add-job"
                    element={<AddJobPage addJobSubmit={addJob} />}
                />
                <Route
                    path="/jobs/:id"
                    element={<JobPage />}
                    loader={jobLoader}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default App;
