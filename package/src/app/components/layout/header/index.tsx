"use client";

import { Button } from "@/components/ui/button";
import Logo from "../logo";

const Header = () => {
  const handleDownloadPDF = () => {
    // 1. Crea un elemento de enlace <a> invisible
    const link = document.createElement("a");
    
    // 2. Define la ruta hacia tu archivo en la carpeta public
    link.href = "/images/work/CVJenniferVelasquez.pdf";
    
    // 3. Agrega el atributo de descarga y el nombre con el que se guardará
    link.download = "CV_Jennifer_Velasquez.pdf"; 
    
    // 4. Añade el enlace al documento, simula el clic y luego elimínalo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <div>
              <Logo />
            </div>

            <Button
              variant="outline"
              onClick={handleDownloadPDF}
              className="relative overflow-hidden cursor-pointer w-fit h-full py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
            >
              <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                Download PDF Resume
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;