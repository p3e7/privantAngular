'use strict';


angular.module('privantAngularApp').factory('dataService', function () {
  var data = {};


  //Alle Events.
  data.pAEvents = {
    items: [
      {
        id: 1,
        name: "Brunnenfest",
        date: "2016-01-22",
        location: "Lünen",
        description: "Sei beim 10. Brunnenfest dabei!",
        descriptionLong:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis dignissim interdum. Sed lobortis massa quam, a vehicula mi pulvinar at. Mauris arcu lacus, pharetra a venenatis vel, fringilla at leo. Nam ut tortor id nibh egestas scelerisque ac at enim. Sed erat urna, molestie ut fringilla eget, rutrum vel ex. Nam laoreet, ex in imperdiet vulputate, dolor nisi tempus neque, quis feugiat magna libero sed urna. Aenean vel velit consectetur, cursus metus ut, pulvinar risus. Vestibulum eu erat eleifend, elementum mauris sit amet, scelerisque tortor.Vestibulum pretium orci et tincidunt tempor. Proin eget aliquam diam. Maecenas in risus nisl. Sed bibendum pretium risus, id blandit massa malesuada nec. Donec varius erat quis congue placerat. Duis eros nulla, molestie nec sodales tincidunt, lobortis sit amet sem. Suspendisse varius nisi in suscipit finibus. Fusce ac facilisis mi, sed pharetra mi. Aenean sed sem condimentum, vulputate diam vel, auctor neque. Morbi quam dui, aliquet vel sapien ut, fermentum fringilla neque. Ut nec magna posuere, eleifend dolor id, tristique libero. Donec consequat scelerisque tincidunt.        Suspendisse facilisis faucibus ligula ut fermentum. Pellentesque a augue urna. Aliquam orci dolor, venenatis a dui nec, mollis consectetur est. Maecenas massa arcu, interdum finibus ultrices ac, volutpat quis nulla. Phasellus dapibus dui ac pretium efficitur. Vivamus vel pretium nisl, vitae commodo justo. Vivamus varius neque ac purus cursus egestas. Sed hendrerit scelerisque consectetur. Maecenas eu dictum sapien, id efficitur nisi. Aenean non velit aliquam, laoreet nibh in, maximus diam. Vestibulum pretium, erat a imperdiet blandit, mauris quam condimentum eros, feugiat aliquam purus nunc sed ipsum. Donec et malesuada quam. Praesent nec nibh sit amet lacus volutpat lobortis sed non lacus. Nulla facilisi. Phasellus fringilla congue nisl. Ut aliquam ligula augue, eget suscipit nunc gravida vel.",
        picture: "http://placehold.it/200x100/239788/ffffff",
        visitors: "2",
        limit:"20"
      },
      {
        id: 2,
        name: "Elek-trio",
        date: "2015-11-23T15",
        location: "Dortmund",
        description: "Wir haben Batman",
        descriptionLong:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis dignissim interdum. Sed lobortis massa quam, a vehicula mi pulvinar at. Mauris arcu lacus, pharetra a venenatis vel, fringilla at leo. Nam ut tortor id nibh egestas scelerisque ac at enim. Sed erat urna, molestie ut fringilla eget, rutrum vel ex. Nam laoreet, ex in imperdiet vulputate, dolor nisi tempus neque, quis feugiat magna libero sed urna. Aenean vel velit consectetur, cursus metus ut, pulvinar risus. Vestibulum eu erat eleifend, elementum mauris sit amet, scelerisque tortor.Vestibulum pretium orci et tincidunt tempor. Proin eget aliquam diam. Maecenas in risus nisl. Sed bibendum pretium risus, id blandit massa malesuada nec. Donec varius erat quis congue placerat. Duis eros nulla, molestie nec sodales tincidunt, lobortis sit amet sem. Suspendisse varius nisi in suscipit finibus. Fusce ac facilisis mi, sed pharetra mi. Aenean sed sem condimentum, vulputate diam vel, auctor neque. Morbi quam dui, aliquet vel sapien ut, fermentum fringilla neque. Ut nec magna posuere, eleifend dolor id, tristique libero. Donec consequat scelerisque tincidunt.        Suspendisse facilisis faucibus ligula ut fermentum. Pellentesque a augue urna. Aliquam orci dolor, venenatis a dui nec, mollis consectetur est. Maecenas massa arcu, interdum finibus ultrices ac, volutpat quis nulla. Phasellus dapibus dui ac pretium efficitur. Vivamus vel pretium nisl, vitae commodo justo. Vivamus varius neque ac purus cursus egestas. Sed hendrerit scelerisque consectetur. Maecenas eu dictum sapien, id efficitur nisi. Aenean non velit aliquam, laoreet nibh in, maximus diam. Vestibulum pretium, erat a imperdiet blandit, mauris quam condimentum eros, feugiat aliquam purus nunc sed ipsum. Donec et malesuada quam. Praesent nec nibh sit amet lacus volutpat lobortis sed non lacus. Nulla facilisi. Phasellus fringilla congue nisl. Ut aliquam ligula augue, eget suscipit nunc gravida vel.",
        picture: "http://placehold.it/100x100/239788/ffffff",
        visitors: "4",
        limit:"20"
      },
      {
        id: 3,
        name: "DGWeekend",
        date: "2016-02-02T19:05",
        time: "19:00",
        location: "Münster",
        description: "Retro-Gaming Deluexe",
        descriptionLong:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis dignissim interdum. Sed lobortis massa quam, a vehicula mi pulvinar at. Mauris arcu lacus, pharetra a venenatis vel, fringilla at leo. Nam ut tortor id nibh egestas scelerisque ac at enim. Sed erat urna, molestie ut fringilla eget, rutrum vel ex. Nam laoreet, ex in imperdiet vulputate, dolor nisi tempus neque, quis feugiat magna libero sed urna. Aenean vel velit consectetur, cursus metus ut, pulvinar risus. Vestibulum eu erat eleifend, elementum mauris sit amet, scelerisque tortor.Vestibulum pretium orci et tincidunt tempor. Proin eget aliquam diam. Maecenas in risus nisl. Sed bibendum pretium risus, id blandit massa malesuada nec. Donec varius erat quis congue placerat. Duis eros nulla, molestie nec sodales tincidunt, lobortis sit amet sem. Suspendisse varius nisi in suscipit finibus. Fusce ac facilisis mi, sed pharetra mi. Aenean sed sem condimentum, vulputate diam vel, auctor neque. Morbi quam dui, aliquet vel sapien ut, fermentum fringilla neque. Ut nec magna posuere, eleifend dolor id, tristique libero. Donec consequat scelerisque tincidunt.        Suspendisse facilisis faucibus ligula ut fermentum. Pellentesque a augue urna. Aliquam orci dolor, venenatis a dui nec, mollis consectetur est. Maecenas massa arcu, interdum finibus ultrices ac, volutpat quis nulla. Phasellus dapibus dui ac pretium efficitur. Vivamus vel pretium nisl, vitae commodo justo. Vivamus varius neque ac purus cursus egestas. Sed hendrerit scelerisque consectetur. Maecenas eu dictum sapien, id efficitur nisi. Aenean non velit aliquam, laoreet nibh in, maximus diam. Vestibulum pretium, erat a imperdiet blandit, mauris quam condimentum eros, feugiat aliquam purus nunc sed ipsum. Donec et malesuada quam. Praesent nec nibh sit amet lacus volutpat lobortis sed non lacus. Nulla facilisi. Phasellus fringilla congue nisl. Ut aliquam ligula augue, eget suscipit nunc gravida vel.",
        picture: "http://placehold.it/100x200/239788/ffffff",
        visitors: "3",
        limit:"20"
      },
      {
        id: 4,
        name: "Kartoffelernte",
        date: "2016-05-06T17:30",
        location: "München",
        description: "Hilf bei der Ernte und hab' Spaß!Hilf bei der Ernte und hab' Spaß!Hilf bei der Ernte und hab' Spaß!Hilf bei der Ernte und hab' Spaß!",
        descriptionLong:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis dignissim interdum. Sed lobortis massa quam, a vehicula mi pulvinar at. Mauris arcu lacus, pharetra a venenatis vel, fringilla at leo. Nam ut tortor id nibh egestas scelerisque ac at enim. Sed erat urna, molestie ut fringilla eget, rutrum vel ex. Nam laoreet, ex in imperdiet vulputate, dolor nisi tempus neque, quis feugiat magna libero sed urna. Aenean vel velit consectetur, cursus metus ut, pulvinar risus. Vestibulum eu erat eleifend, elementum mauris sit amet, scelerisque tortor.Vestibulum pretium orci et tincidunt tempor. Proin eget aliquam diam. Maecenas in risus nisl. Sed bibendum pretium risus, id blandit massa malesuada nec. Donec varius erat quis congue placerat. Duis eros nulla, molestie nec sodales tincidunt, lobortis sit amet sem. Suspendisse varius nisi in suscipit finibus. Fusce ac facilisis mi, sed pharetra mi. Aenean sed sem condimentum, vulputate diam vel, auctor neque. Morbi quam dui, aliquet vel sapien ut, fermentum fringilla neque. Ut nec magna posuere, eleifend dolor id, tristique libero. Donec consequat scelerisque tincidunt.        Suspendisse facilisis faucibus ligula ut fermentum. Pellentesque a augue urna. Aliquam orci dolor, venenatis a dui nec, mollis consectetur est. Maecenas massa arcu, interdum finibus ultrices ac, volutpat quis nulla. Phasellus dapibus dui ac pretium efficitur. Vivamus vel pretium nisl, vitae commodo justo. Vivamus varius neque ac purus cursus egestas. Sed hendrerit scelerisque consectetur. Maecenas eu dictum sapien, id efficitur nisi. Aenean non velit aliquam, laoreet nibh in, maximus diam. Vestibulum pretium, erat a imperdiet blandit, mauris quam condimentum eros, feugiat aliquam purus nunc sed ipsum. Donec et malesuada quam. Praesent nec nibh sit amet lacus volutpat lobortis sed non lacus. Nulla facilisi. Phasellus fringilla congue nisl. Ut aliquam ligula augue, eget suscipit nunc gravida vel.",
        picture: "http://placehold.it/200x200/239788/ffffff",
        visitors: "5",
        limit:"20"
      }

    ]
  };

  return data;
});
