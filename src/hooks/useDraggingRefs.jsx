import { createRef, useEffect, useRef } from "react";

function useDraggingRefs(containerRef, arrSize) {
  const elementsCount = arrSize;
  const elems = useRef([...Array(elementsCount)].map(() => createRef()));

  useEffect(
    function () {
      function drag(elem) {
        elem.current.ondragstart = function () {
          return false;
        };

        elem.current.onmousedown = function (event) {
          moveAt(event.pageX, event.pageY);

          function moveAt(pageX, pageY) {
            const fridgeRect = containerRef.current.getBoundingClientRect();
            const localX = pageX - fridgeRect.left;
            const localY = pageY - fridgeRect.top;

            elem.current.style.left =
              localX - elem.current.offsetWidth / 2 + "px";
            elem.current.style.top =
              localY - elem.current.offsetHeight / 2 + "px";
          }

          function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
          }

          document.addEventListener("mousemove", onMouseMove);

          elem.current.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            elem.current.onmouseup = null;
          };
        };

        // Для сенсорных устройств
        elem.current.ontouchstart = function (event) {
          const touch = event.touches[0]; // первая точка касания

          moveAt(touch.pageX, touch.pageY);

          function onTouchMove(event) {
            const touch = event.touches[0];
            moveAt(touch.pageX, touch.pageY);
          }

          document.addEventListener("touchmove", onTouchMove);

          elem.current.ontouchend = function () {
            document.removeEventListener("touchmove", onTouchMove);
            elem.current.ontouchend = null;
          };
        };

        function moveAt(pageX, pageY) {
          const fridgeRect = containerRef.current.getBoundingClientRect();
          const localX = pageX - fridgeRect.left;
          const localY = pageY - fridgeRect.top;

          elem.current.style.left =
            localX - elem.current.offsetWidth / 2 + "px";
          elem.current.style.top =
            localY - elem.current.offsetHeight / 2 + "px";
        }
      }

      elems.current.forEach((elem) => drag(elem));

      // return () => {
      //   magnetsRefs.forEach((ref) => {
      //     ref.current = null; // Очистка рефов
      //   });
      // };
    },
    [containerRef]
  );

  return { elems };
}

export default useDraggingRefs;
