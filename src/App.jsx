// Packages 
import { createBrowserRouter,
        createRoutesFromElements,
        RouterProvider,
        Route
} from "react-router-dom";

// Layouts
import RootLayout from "./Layouts/RootLayout";

// Pages
import Home from "./Component/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <RootLayout /> }>
            <Route index element={ <Home /> } />
        </Route>
    )
)

const App = () => <RouterProvider router={router} /> 

export default App;