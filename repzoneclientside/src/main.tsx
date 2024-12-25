import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Layout/>
  </BrowserRouter>,
)
