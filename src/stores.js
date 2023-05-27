import {writable} from "svelte/store";

export const FeedbackStore = writable([{
  id: 1,
  rating: 8,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
  id: 2,
  rating: 7,
  text: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint!'
}, {
  id: 3,
  rating: 6,
  text: 'Volutpat ac tincidunt vitae semper quis lectus nulla at. Donec pretium vulputate sapien nec. Tortor aliquam nulla facilisi cras. Ut lectus arcu bibendum at varius vel pharetra. Sit amet venenatis urna cursus eget. Aliquam etiam erat velit scelerisque in dictum non consectetur. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Commodo odio aenean sed adipiscing.'
}])
