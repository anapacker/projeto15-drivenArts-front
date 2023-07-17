import Header from "../components/homeComṕonents/Header";
import Main from "../components/homeComṕonents/Main";
import Footer from "../components/homeComṕonents/Footer";
import { useState } from "react";

export default function HomePage() {
     const [categoriaSelecionada, setCategoriaSelecionada] = useState()

     return <>
          <Header categoriaSelecionada={categoriaSelecionada} setCategoriaSelecionada={setCategoriaSelecionada} />
          <Main categoriaSelecionada={categoriaSelecionada} />
          <Footer />
     </>
}