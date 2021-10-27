import React from "react";
import PageTransition from "../components/PageTransition";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Setup = () => {
  return (
    <Main
      meta={
        <Meta
          title="Avyansh"
          description="My Personal website made with NextJS & Tailwind."
        />
      }
    >
      <PageTransition>
        <div className="flex flex-col justify-center px-8 ">
          <div className="flex-col items-center">
            <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-t dark:from-indigo-200 dark:to-indigo-400">
              Setup
            </h1>
            <p className="mb-4 bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white ">
              Information about my setup.
            </p>
            <div className="mt-8">
              <article className="max-w-none w-full prose prose-lg dark:prose-dark">
                <div>
                  <ul>
                    <li className="p-4">
                      <span className="font-medium">Case</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://lian-li.com/product/odyssey-x/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Lian Li Odyssey X Cabinet (Silver)
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">Motherboard</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://rog.asus.com/in/motherboards/rog-strix/rog-strix-x570-e-gaming-model/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        ASUS ROG X570-E
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">PSU</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://rog.asus.com/power-supply-units/rog-strix/rog-strix-550g-model/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        ASUS ROG Strix 550W PSU
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">GPU</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.nvidia.com/en-gb/geforce/graphics-cards/30-series/rtx-3090/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        NVIDIA Geforce RTX 3090 Founder Edition
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">CPU</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://ark.intel.com/content/www/us/en/ark/products/199332/intel-core-i910900k-processor-20m-cache-up-to-5-30-ghz.html"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Intel i9 10900k
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">CPU Cooler</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.corsair.com/us/en/Categories/Products/Liquid-Cooling/iCUE-ELITE-CAPELLIX-Liquid-CPU-Cooler/p/CW-9060046-WW"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Corsair iCUE H100i ELITE CAPELLIX
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">Memory</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.crucial.in/products/gaming-memory?gclid=CjwKCAjwq9mLBhB2EiwAuYdMtVmpRmBew1JHGhWmU1jw14SfA3MP0z9T4DUN7SWklYWf8EiZcAPQUhoCX_4QAvD_BwE&ef_id=CjwKCAjwq9mLBhB2EiwAuYdMtVmpRmBew1JHGhWmU1jw14SfA3MP0z9T4DUN7SWklYWf8EiZcAPQUhoCX_4QAvD_BwE:G:s&gclsrc=aw.ds"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Crucial Ballistix RGB 2x16 GB
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">Storage</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.samsung.com/semiconductor/minisite/ssd/product/consumer/970evoplus/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Samsung 970 EVO Plus NVMe M.2 SSD 1TB (x2)
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">Laptop</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.razer.com/gaming-laptops/razer-blade"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Razer Stealth blade 15
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </PageTransition>
    </Main>
  );
};
export default Setup;
