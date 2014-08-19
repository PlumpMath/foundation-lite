## Foundation Lite

A work in progress template for Foundation by ZURB that gets down to business.

#### Who is this for?

Anyone who is interested in implementing Foundation with pure SASS with little to no use of its JavaScript components.

## To get started

Make sure you have [Node.js](http://nodejs.org) installed on your machine.

1. Clone the repository.
2. Run `npm install -g bower grunt` in your terminal.
3. `cd` to the cloned directory on your computer.
4. Run `npm install && bower install`.
5. Run `grunt lite` to remove unnecessary files.
   - _This deletes certain bower components. Use with caution!_
6. Finally, run `grunt`.

Grunt will watch for changes in the `scss/` directory and compile your CSS automatically.

See [Foundation's documentation](http://foundation.zurb.com/docs/) for further information on using it with SASS.
