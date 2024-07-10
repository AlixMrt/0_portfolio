import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

export default function EssaiOrnaments() {
  return (
    <section className="section">
      <div className="container" data-type="narrow">
        <div className="find-us-Content" id="essai-ornaments">
          <div className="find-us-main-content">
            <div className={`find-us__card essai-card | center-children `}>
              <div className="card-header">
                <h3 className="heading-3 | card-header__text">Adresse</h3>
              </div>
              <div className="card-main">
                <div id="border-bottom"></div>
                <div>
                  <p>Rue de Bourgogne</p>
                  <p>Dijon</p>
                </div>
                <div>
                  <p>04 73 48 57 37</p>
                  <p>Auberge de Cluny</p>
                </div>
              </div>
            </div>
            <div className={`find-us__card essai-card-2  | center-children `}>
              <div className="card-header">
                <h3 className="heading-3 | card-header__text">Adresse</h3>
              </div>
              <div className="card-main">
                <div id="border-bottom"></div>
                <div>
                  <p>Rue de Bourgogne</p>
                  <p>Dijon</p>
                </div>
                <div>
                  <p>04 73 48 57 37</p>
                  <p>Auberge de Cluny</p>
                </div>
              </div>
            </div>
            <div className={`find-us__card essai-card-3  | center-children `}>
              <Image src="/images/photofamille.png" fill></Image>
            </div>
            <div className={`find-us__card essai-card-4  | center-children `}>
              <Image src="/images/photofamille.png" fill></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
