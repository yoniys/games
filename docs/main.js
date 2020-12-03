(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Board-game/board.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Board-game/board.component.ts ***!
  \***********************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/Board-game/constants.ts");
/* harmony import */ var _piece_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piece.component */ "./src/app/Board-game/piece.component.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.service */ "./src/app/Board-game/game.service.ts");
/* harmony import */ var _s_s1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = ["board"];
const _c1 = ["next"];
class BoardComponent {
    constructor(service, s) {
        this.service = service;
        this.s = s;
        this.moves = {
            [_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT]: (p) => (Object.assign(Object.assign({}, p), { x: p.x - 1 })),
            [_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT]: (p) => (Object.assign(Object.assign({}, p), { x: p.x + 1 })),
            [_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN]: (p) => (Object.assign(Object.assign({}, p), { y: p.y + 1 })),
            [_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].SPACE]: (p) => (Object.assign(Object.assign({}, p), { y: p.y + 1 })),
            [_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].UP]: (p) => this.service.rotate(p)
        };
    }
    keyEvent(event) {
        if (event.keyCode === _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].ESC) {
            this.gameOver();
        }
        else if (this.moves[event.keyCode]) {
            event.preventDefault();
            // Get new state
            let p = this.moves[event.keyCode](this.piece);
            if (event.keyCode === _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].SPACE) {
                // Hard drop
                while (this.service.valid(p, this.board)) {
                    this.points += _constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].HARD_DROP;
                    this.piece.move(p);
                    p = this.moves[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN](this.piece);
                }
            }
            else if (this.service.valid(p, this.board)) {
                this.piece.move(p);
                if (event.keyCode === _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN) {
                    this.points += _constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].SOFT_DROP;
                }
            }
        }
    }
    ngOnInit() {
        this.initBoard();
        this.initNext();
        this.resetGame();
    }
    initBoard() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        this.ctx.canvas.width = _constants__WEBPACK_IMPORTED_MODULE_1__["COLS"] * _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        this.ctx.canvas.height = _constants__WEBPACK_IMPORTED_MODULE_1__["ROWS"] * _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        // Scale so we don't need to give size on every draw.
        this.ctx.scale(_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]);
    }
    initNext() {
        this.ctxNext = this.canvasNext.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        this.ctxNext.canvas.width = 4 * _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        this.ctxNext.canvas.height = 4 * _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        this.ctxNext.scale(_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]);
    }
    play() {
        this.s.updeate_wins(this.s.player_details.id, this.s.player_details.wins);
        this.resetGame();
        this.next = new _piece_component__WEBPACK_IMPORTED_MODULE_2__["Piece"](this.ctx);
        this.piece = new _piece_component__WEBPACK_IMPORTED_MODULE_2__["Piece"](this.ctx);
        this.next.drawNext(this.ctxNext);
        this.time.start = performance.now();
        // If we have an old game running a game then cancel the old
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
        }
        this.animate();
    }
    resetGame() {
        this.points = 0;
        this.lines = 0;
        this.level = 0;
        this.board = this.getEmptyBoard();
        this.time = { start: 0, elapsed: 0, level: _constants__WEBPACK_IMPORTED_MODULE_1__["LEVEL"][this.level] };
    }
    animate(now = 0) {
        this.time.elapsed = now - this.time.start;
        if (this.time.elapsed > this.time.level) {
            this.time.start = now;
            if (!this.drop()) {
                this.gameOver();
                return;
            }
        }
        this.draw();
        this.requestId = requestAnimationFrame(this.animate.bind(this));
    }
    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.piece.draw();
        this.drawBoard();
    }
    drop() {
        let p = this.moves[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN](this.piece);
        if (this.service.valid(p, this.board)) {
            this.piece.move(p);
        }
        else {
            this.freeze();
            this.clearLines();
            if (this.piece.y === 0) {
                // Game over
                return false;
            }
            this.piece = this.next;
            this.next = new _piece_component__WEBPACK_IMPORTED_MODULE_2__["Piece"](this.ctx);
            this.next.drawNext(this.ctxNext);
        }
        return true;
    }
    clearLines() {
        let lines = 0;
        this.board.forEach((row, y) => {
            if (row.every(value => value !== 0)) {
                lines++;
                this.board.splice(y, 1);
                this.board.unshift(Array(_constants__WEBPACK_IMPORTED_MODULE_1__["COLS"]).fill(0));
            }
        });
        if (lines > 0) {
            this.points += this.service.getLinesClearedPoints(lines, this.level);
            this.lines += lines;
            if (this.lines >= _constants__WEBPACK_IMPORTED_MODULE_1__["LINES_PER_LEVEL"]) {
                this.level++;
                console.log("up level");
                console.log(this.s.player_details.id, this.s.player_details.wins);
                this.s.updeate_wins(this.s.player_details.id, this.s.player_details.wins);
                this.lines -= _constants__WEBPACK_IMPORTED_MODULE_1__["LINES_PER_LEVEL"];
                this.time.level = _constants__WEBPACK_IMPORTED_MODULE_1__["LEVEL"][this.level];
            }
        }
    }
    freeze() {
        this.piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.board[y + this.piece.y][x + this.piece.x] = value;
                }
            });
        });
    }
    drawBoard() {
        this.board.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_1__["COLORS"][value];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
    }
    gameOver() {
        cancelAnimationFrame(this.requestId);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(1, 3, 8, 1.2);
        this.ctx.font = '1px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText('GAME OVER', 1.8, 4);
    }
    getEmptyBoard() {
        return Array.from({ length: _constants__WEBPACK_IMPORTED_MODULE_1__["ROWS"] }, () => Array(_constants__WEBPACK_IMPORTED_MODULE_1__["COLS"]).fill(0));
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_s_s1_service__WEBPACK_IMPORTED_MODULE_4__["S1Service"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["game-board"]], viewQuery: function BoardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasNext = _t.first);
    } }, hostBindings: function BoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function BoardComponent_keydown_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 24, vars: 3, consts: [["id", "tetries"], [1, "grid"], [1, "game-board"], ["board", ""], [1, "right-column"], [1, "next"], ["next", ""], [1, "play-button", 3, "click"], ["routerLink", "/all-games"], [1, "return-button"], ["autoplay", "", "loop", ""], ["src", "../../assets/audio/tetris.mp3", "type", "audio/mpeg"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TETRIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "canvas", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_16_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "audio", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "source", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Your browser does not support the audio element.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.points, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lines: ", ctx.lines, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level: ", ctx.level, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["#tetries[_ngcontent-%COMP%]{background-image: url('tetris-shapes.jpg'); position: fixed; \r\n    top: 0; \r\n    left: 0;\r\n    \r\n    min-width: 100%;\r\n    min-height: 100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQm9hcmQtZ2FtZS90ZXRyaXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsMENBQTJELEVBQUUsZUFBZTtJQUNqRixNQUFNO0lBQ04sT0FBTztJQUNQLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9Cb2FyZC1nYW1lL3RldHJpcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGV0cmllc3tiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvdGV0cmlzLXNoYXBlcy5qcGcnKTsgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHRvcDogMDsgXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLyogUHJlc2VydmUgYXNwZXQgcmF0aW8gKi9cclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'game-board',
                templateUrl: 'board.component.html',
                styleUrls: ['./tetris.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }, { type: _s_s1_service__WEBPACK_IMPORTED_MODULE_4__["S1Service"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['board', { static: true }]
        }], canvasNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['next', { static: true }]
        }], keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/Board-game/constants.ts":
/*!*****************************************!*\
  !*** ./src/app/Board-game/constants.ts ***!
  \*****************************************/
/*! exports provided: COLS, ROWS, BLOCK_SIZE, LINES_PER_LEVEL, COLORS, SHAPES, KEY, POINTS, LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLS", function() { return COLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS", function() { return ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_SIZE", function() { return BLOCK_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINES_PER_LEVEL", function() { return LINES_PER_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return SHAPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS", function() { return POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL", function() { return LEVEL; });
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const LINES_PER_LEVEL = 10;
const COLORS = [
    'none',
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
];
const SHAPES = [
    [],
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
    [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
    [[4, 4], [4, 4]],
    [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
    [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
    [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
];
class KEY {
}
KEY.ESC = 27;
KEY.SPACE = 32;
KEY.LEFT = 37;
KEY.UP = 38;
KEY.RIGHT = 39;
KEY.DOWN = 40;
class POINTS {
}
POINTS.SINGLE = 100;
POINTS.DOUBLE = 300;
POINTS.TRIPLE = 500;
POINTS.TETRIS = 800;
POINTS.SOFT_DROP = 1;
POINTS.HARD_DROP = 2;
class LEVEL {
}
LEVEL[0] = 800;
LEVEL[1] = 720;
LEVEL[2] = 630;
LEVEL[3] = 550;
LEVEL[4] = 470;
LEVEL[5] = 380;
LEVEL[6] = 300;
LEVEL[7] = 220;
LEVEL[8] = 130;
LEVEL[9] = 100;
LEVEL[10] = 80;
LEVEL[11] = 80;
LEVEL[12] = 80;
LEVEL[13] = 70;
LEVEL[14] = 70;
LEVEL[15] = 70;
LEVEL[16] = 50;
LEVEL[17] = 50;
LEVEL[18] = 50;
LEVEL[19] = 30;
LEVEL[20] = 30;


/***/ }),

/***/ "./src/app/Board-game/game.service.ts":
/*!********************************************!*\
  !*** ./src/app/Board-game/game.service.ts ***!
  \********************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/Board-game/constants.ts");



class GameService {
    valid(p, board) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;
                return (this.isEmpty(value) ||
                    (this.insideWalls(x) &&
                        this.aboveFloor(y) &&
                        this.notOccupied(board, x, y)));
            });
        });
    }
    isEmpty(value) {
        return value === 0;
    }
    insideWalls(x) {
        return x >= 0 && x < _constants__WEBPACK_IMPORTED_MODULE_1__["COLS"];
    }
    aboveFloor(y) {
        return y <= _constants__WEBPACK_IMPORTED_MODULE_1__["ROWS"];
    }
    notOccupied(board, x, y) {
        return board[y] && board[y][x] === 0;
    }
    rotate(piece) {
        let p = JSON.parse(JSON.stringify(piece));
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
            }
        }
        p.shape.forEach(row => row.reverse());
        return p;
    }
    getLinesClearedPoints(lines, level) {
        const lineClearPoints = lines === 1
            ? _constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].SINGLE
            : lines === 2
                ? _constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].DOUBLE
                : lines === 3
                    ? _constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].TRIPLE
                    : lines === 4
                        ? _constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].TETRIS
                        : 0;
        return (level + 1) * lineClearPoints;
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Board-game/piece.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Board-game/piece.component.ts ***!
  \***********************************************/
/*! exports provided: Piece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piece", function() { return Piece; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/Board-game/constants.ts");

class Piece {
    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }
    spawn() {
        const typeId = this.randomizeTetrominoType(_constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"].length - 1);
        this.shape = _constants__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][typeId];
        this.color = _constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"][typeId];
        this.x = typeId === 4 ? 4 : 3;
        this.y = 0;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }
    drawNext(ctxNext) {
        ctxNext.clearRect(0, 0, ctxNext.canvas.width, ctxNext.canvas.height);
        ctxNext.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    ctxNext.fillRect(x, y, 1, 1);
                }
            });
        });
    }
    move(p) {
        this.x = p.x;
        this.y = p.y;
        this.shape = p.shape;
    }
    randomizeTetrominoType(noOfTypes) {
        return Math.floor(Math.random() * noOfTypes + 1);
    }
}


/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function AdminComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.enterData(_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "get data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tr_23_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const user_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(user_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " deled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.wins);
} }
class AdminComponent {
    constructor(s) {
        this.s = s;
        this.visibul = true;
    }
    ngOnInit() {
    }
    enterData(code) {
        this.s.http.get(`http://localhost:3000/profils-co/findAll/admin/${code}`).subscribe((data) => {
            this.allUsersData = data;
            if (this.allUsersData) {
                this.visibul = false;
            }
        });
        this.saveCode = code;
    }
    delete(id) {
        this.s.http.delete(`http://localhost:3000/profils-co/remove/${id}`).subscribe();
        console.log(`delete:${id}`);
        this.enterData(this.saveCode);
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 27, vars: 2, consts: [[4, "ngIf"], [1, "card"], [1, "card-header", "text-center", "font-weight-bold", "text-uppercase", "py-4"], [1, "card-body"], ["id", "table", 1, "table-editable"], [1, "table-add", "float-right", "mb-3", "mr-2"], ["href", "#!", 1, "text-success"], ["aria-hidden", "true", 1, "fas", "fa-plus", "fa-2x"], [1, "table", "table-bordered", "table-responsive-md", "table-striped", "text-center"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["routerLink", "/all-games"], [2, "color", "red"], ["type", "text"], ["code", ""], [3, "click"], ["contenteditable", "true", 1, "pt-3-half"], [1, "pt-3-half"], [1, "table-up"], [1, "indigo-text"], ["aria-hidden", "true", 1, "fas", "fa-long-arrow-alt-up"], [1, "table-down"], ["href", "#!", 1, "indigo-text"], ["aria-hidden", "true", 1, "fas", "fa-long-arrow-alt-down"], [1, "table-remove"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded", "btn-sm", "my-0", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "wins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AdminComponent_tr_23_Template, 21, 4, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visibul);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allUsersData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _Board_game_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Board-game/board.component */ "./src/app/Board-game/board.component.ts");
/* harmony import */ var _comps_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/all-games/all-games.component */ "./src/app/comps/all-games/all-games.component.ts");
/* harmony import */ var _comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/log-in/log-in.component */ "./src/app/comps/log-in/log-in.component.ts");
/* harmony import */ var _game_warper_warper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/warper/warper.component */ "./src/app/game/warper/warper.component.ts");









const routes = [
    { path: '', redirectTo: 'log-in', pathMatch: 'full' },
    { path: 'log-in', component: _comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"] },
    { path: 'all-games', component: _comps_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_4__["AllGamesComponent"] },
    { path: 'pazel-game', component: _game_warper_warper_component__WEBPACK_IMPORTED_MODULE_6__["WarperComponent1"] },
    { path: 'game-bord', component: _Board_game_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'tic-tac';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/log-in/log-in.component */ "./src/app/comps/log-in/log-in.component.ts");
/* harmony import */ var _comps_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/all-games/all-games.component */ "./src/app/comps/all-games/all-games.component.ts");
/* harmony import */ var _Board_game_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Board-game/board.component */ "./src/app/Board-game/board.component.ts");
/* harmony import */ var _game_m_m_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/m/m.module */ "./src/app/game/m/m.module.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _game_m_m_module__WEBPACK_IMPORTED_MODULE_8__["MModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_Board_game_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"],
        _comps_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_6__["AllGamesComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _game_m_m_module__WEBPACK_IMPORTED_MODULE_8__["MModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_Board_game_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"],
                    _comps_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_6__["AllGamesComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _game_m_m_module__WEBPACK_IMPORTED_MODULE_8__["MModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps/all-games/all-games.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/all-games/all-games.component.ts ***!
  \********************************************************/
/*! exports provided: AllGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllGamesComponent", function() { return AllGamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function AllGamesComponent_div_0_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllGamesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllGamesComponent_div_0_div_1_button_4_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.s.player_details.Name, " you have ", ctx_r1.s.player_details.wins, " wins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.s.player_details.Name == "admin");
} }
function AllGamesComponent_div_0_div_8_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} }
function AllGamesComponent_div_0_div_8_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllGamesComponent_div_0_div_8_div_4_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllGamesComponent_div_0_div_8_div_4_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r8.first_time(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AllGamesComponent_div_0_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllGamesComponent_div_0_div_8_div_4_a_1_Template, 2, 0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllGamesComponent_div_0_div_8_div_4_img_2_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.s.first_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.s.first_time);
} }
function AllGamesComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "10 wins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllGamesComponent_div_0_div_8_img_3_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllGamesComponent_div_0_div_8_div_4_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.s.player_details.wins <= 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.s.player_details.wins > 9);
} }
function AllGamesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllGamesComponent_div_0_div_1_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "0 wins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AllGamesComponent_div_0_div_8_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.s.player_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.s.player_details);
} }
class AllGamesComponent {
    constructor(s) {
        this.s = s;
        this.img = "../../../assets/img/b7-1.gif";
    }
    ngOnInit() {
    }
    first_time() {
        this.img = "../../../assets/img/box.gif";
        setTimeout(() => { this.img = "../../../assets/img/puzzle.jpg"; this.notfirst(); }, 1000);
    }
    notfirst() { this.s.first_time = false; }
    choose(game) {
        this.s.choose_game = game;
    }
}
AllGamesComponent.ɵfac = function AllGamesComponent_Factory(t) { return new (t || AllGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
AllGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllGamesComponent, selectors: [["app-all-games"]], decls: 4, vars: 1, consts: [["id", "background", 4, "ngIf"], ["autoplay", "", "loop", ""], ["src", "../../../assets/audio/main.mp3", "type", "audio/mpeg"], ["id", "background"], ["id", "profile", 4, "ngIf"], ["id", "warper"], [1, "tic-tac"], [1, "word-color"], ["routerLink", "/game-bord"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJdMtL76uPW6UdqNclz3vkFWAQ6XrYsKefg&usqp=CAU", "alt", "", 1, "img"], ["class", "tic-tac", 4, "ngIf"], ["id", "profile"], ["routerLink", "/admin"], [4, "ngIf"], ["src", "../../../assets/img/secret.jpg", "alt", "", 4, "ngIf"], ["src", "../../../assets/img/secret.jpg", "alt", ""], ["routerLink", "/pazel-game", 4, "ngIf"], ["alt", "", 3, "src", "click", 4, "ngIf"], ["routerLink", "/pazel-game"], ["src", "../../../assets/img/puzzle.jpg", "alt", "img"], ["alt", "", 3, "src", "click"]], template: function AllGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllGamesComponent_div_0_Template, 9, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support the audio element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.choose_game == "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["#warper[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.tic-tac[_ngcontent-%COMP%]{margin-left: 100px;}\r\n\r\n.btn-black[_ngcontent-%COMP%]{\r\n    background-color: #000 !important;\r\n    color: #fff;\r\n}\r\n\r\n.img[_ngcontent-%COMP%]{margin-left: -40;}\r\n\r\n.word-color[_ngcontent-%COMP%]{text-align: center;\r\n    color: orange}\r\n\r\n#profile[_ngcontent-%COMP%]{\r\n    margin-bottom: 100px;\r\n    text-align: center;\r\n}\r\n\r\n#background[_ngcontent-%COMP%]{background-image: url('https://image.freepik.com/free-vector/abstract-violet-pixel-rain-background_23-2148362568.jpg');\r\n    position: fixed; \r\n    top: 0; \r\n    left: 0; \r\n      \r\n    \r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWxsLWdhbWVzL2FsbC1nYW1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUEsU0FBUyxrQkFBa0IsQ0FBQzs7QUFFNUI7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztBQUNmOztBQUNBLEtBQUssZ0JBQWdCLENBQUM7O0FBQ3RCLFlBQVksa0JBQWtCO0lBQzFCLGFBQWE7O0FBQ2pCO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFDQSxZQUFZLHNIQUFzSDtJQUM5SCxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87O0lBRVAseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9hbGwtZ2FtZXMvYWxsLWdhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3dhcnBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLnRpYy10YWN7bWFyZ2luLWxlZnQ6IDEwMHB4O31cclxuXHJcbi5idG4tYmxhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaW1ne21hcmdpbi1sZWZ0OiAtNDA7fVxyXG4ud29yZC1jb2xvcnt0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogb3JhbmdlfVxyXG4jcHJvZmlsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNiYWNrZ3JvdW5ke2JhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9hYnN0cmFjdC12aW9sZXQtcGl4ZWwtcmFpbi1iYWNrZ3JvdW5kXzIzLTIxNDgzNjI1NjguanBnJyk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgdG9wOiAwOyBcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgICBcclxuICAgIC8qIFByZXNlcnZlIGFzcGV0IHJhdGlvICovXHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllGamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-games',
                templateUrl: './all-games.component.html',
                styleUrls: ['./all-games.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/log-in/log-in.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/log-in/log-in.component.ts ***!
  \**************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LogInComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "games Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login or register from here to access.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.login(_r1.value, _r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.register(_r1.value, _r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LogInComponent {
    constructor(s, router) {
        this.s = s;
        this.router = router;
        this.exists = false;
    }
    ngOnInit() {
    }
    register(name, p) {
        this.s.player_details = { "Name": name, "code": p, "wins": 0 };
        this.s.newregister(name, p);
        this.router.navigate(['/all-games']);
    }
    login(name, p) {
        for (let i of this.s.profiles) {
            if (name == i.Name && p == i.password) {
                this.exists = true;
                this.s.player_details = i;
                this.s.getUserDatalogin(p);
            }
            console.log(i.name);
            console.log(i.code);
        }
        if (this.exists) {
            this.router.navigate(['/all-games']);
        }
        else if (!this.exists) {
            alert("the code or the name are not coreccrt");
            console.log("alert");
        }
    }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) { return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogInComponent, selectors: [["app-log-in"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "sidenav"], [1, "login-main-text"], [1, "main"], [1, "col-md-6", "col-sm-12"], [1, "login-form"], [1, "form-group"], ["type", "text", "placeholder", "User Name", 1, "form-control"], ["User_Name", ""], ["type", "password", "placeholder", "Password", 1, "form-control"], ["Password", ""], ["type", "submit", 1, "btn", "btn-black", 3, "click"], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"]], template: function LogInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LogInComponent_div_0_Template, 26, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.exists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n\r\n\r\n.main-head[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    background: #FFF;\r\n   \r\n}\r\n\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-color: #000;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    padding: 0px 10px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 450px) {\r\n    .login-form[_ngcontent-%COMP%]{\r\n        margin-top: 10%;\r\n    }\r\n\r\n    .register-form[_ngcontent-%COMP%]{\r\n        margin-top: 10%;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 768px){\r\n    .main[_ngcontent-%COMP%]{\r\n        margin-left: 40%; \r\n    }\r\n\r\n    .sidenav[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n        position: fixed;\r\n        z-index: 1;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .login-form[_ngcontent-%COMP%]{\r\n        margin-top: 80%;\r\n    }\r\n\r\n    .register-form[_ngcontent-%COMP%]{\r\n        margin-top: 20%;\r\n    }\r\n}\r\n\r\n\r\n\r\n.login-main-text[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    padding: 60px;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n}\r\n\r\n\r\n\r\n.btn-black[_ngcontent-%COMP%]{\r\n    background-color: #000 !important;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0FBQ25DOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjs7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7Ozs7QUFFQTtJQUNJLFVBQVUsaUJBQWlCLENBQUM7QUFDaEM7Ozs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7OztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTztJQUNYOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0FBQ2Y7Ozs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYWluLWhlYWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgXHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi5tYWluIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAubG9naW4tZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubWFpbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlOyBcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZW5hdntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXItZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubG9naW4tbWFpbi10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi10ZXh0IGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmJ0bi1ibGFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-log-in',
                templateUrl: './log-in.component.html',
                styleUrls: ['./log-in.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/board/board.component.ts":
/*!***********************************************!*\
  !*** ./src/app/game/board/board.component.ts ***!
  \***********************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.service */ "./src/app/game/board/board.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tile/tile.component */ "./src/app/game/tile/tile.component.ts");





function BoardComponent_app_tile_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_app_tile_0_Template_app_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.boardService.moveTile(i_r2); })("swipeup", function BoardComponent_app_tile_0_Template_app_tile_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.boardService.move("up"); })("swipedown", function BoardComponent_app_tile_0_Template_app_tile_swipedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.boardService.move("down"); })("swipeleft", function BoardComponent_app_tile_0_Template_app_tile_swipeleft_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.boardService.move("left"); })("swiperight", function BoardComponent_app_tile_0_Template_app_tile_swiperight_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.boardService.move("right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r1)("index", i_r2);
} }
class BoardComponent {
    constructor(boardService) {
        this.boardService = boardService;
    }
    ngOnInit() {
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 4, vars: 1, consts: [[3, "value", "index", "click", "swipeup", "swipedown", "swipeleft", "swiperight", 4, "ngFor", "ngForOf"], ["autoplay", "", "loop", ""], ["src", "../../../assets/audio/puzzel.mp3", "type", "audio/mpeg"], [3, "value", "index", "click", "swipeup", "swipedown", "swipeleft", "swiperight"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BoardComponent_app_tile_0_Template, 1, 2, "app-tile", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support the audio element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boardService.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_3__["TileComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 610px;\n  height: 610px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9ib2FyZC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGFuZ3VsYXIgZ2FtZVxcZ2FtZXMvc3JjXFxhcHBcXGdhbWVcXGJvYXJkXFxib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNjEwcHg7XHJcbiAgaGVpZ2h0OiA2MTBweDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjEwcHg7XG4gIGhlaWdodDogNjEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.scss']
            }]
    }], function () { return [{ type: _board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/board/board.service.ts":
/*!*********************************************!*\
  !*** ./src/app/game/board/board.service.ts ***!
  \*********************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defs */ "./src/app/game/defs.ts");




class BoardService {
    constructor() {
        this.content = [];
        this.completed = [];
        this.started = false;
        this.initialContent = [];
        this.finished = false;
        this.elapsedSeconds = 0;
        this.timerSrc = null;
        this.timerSub = null;
        this.movesCount = 0;
        this.movesStack = [];
        this.completed = [];
        for (let i = 1; i <= 15; i++) {
            this.completed.push(i);
        }
        this.completed.push(null);
    }
    initGame() {
        this.started = false;
        this.finished = false;
        this.elapsedSeconds = null;
        this.movesCount = 0;
        this.movesStack = [];
        this.setCompleted();
    }
    startGame(initial = null) {
        this.started = true;
        this.finished = false;
        this.elapsedSeconds = 0;
        this.movesCount = 0;
        if (initial) {
            // we can cheat if we want
            this.content = initial.slice();
        }
        else {
            this.content = this.shuffle(this.completed);
        }
        if (this.timerSub) {
            this.timerSub.unsubscribe();
        }
        this.initialContent = this.content.slice();
        this.timerSrc = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 1000);
        this.timerSub = this.timerSrc.subscribe(() => {
            this.elapsedSeconds++;
        });
    }
    setCompleted() {
        this.content = this.completed.slice();
    }
    isInProgress() {
        return this.started && !this.finished;
    }
    shuffle(arr) {
        const result = arr.slice();
        return result.sort(() => Math.random() - 0.5);
    }
    getNullIndex() {
        return this.content.findIndex(i => i === null);
    }
    moveNullToIndex(sourceIndex, nullIndex) {
        const sourceValue = this.content[sourceIndex];
        this.content[sourceIndex] = null;
        this.content[nullIndex] = sourceValue;
    }
    isCompleted() {
        return JSON.stringify(this.content) === JSON.stringify(this.completed);
    }
    move(direction) {
        let successful = false;
        if (this.isInProgress()) {
            switch (direction) {
                case 'up':
                    successful = this.moveUp();
                    break;
                case 'down':
                    successful = this.moveDown();
                    break;
                case 'left':
                    successful = this.moveLeft();
                    break;
                case 'right':
                    successful = this.moveRight();
                    break;
            }
        }
        if (successful) {
            this.movesStack.push(direction);
            this.movesCount++;
            this.finished = this.isCompleted();
        }
    }
    moveUp() {
        const nullIndex = this.getNullIndex();
        if (nullIndex <= 12) {
            const sourceIndex = nullIndex + 4;
            this.moveNullToIndex(sourceIndex, nullIndex);
            return true;
        }
    }
    moveDown() {
        const nullIndex = this.getNullIndex();
        if (nullIndex >= 3) {
            const sourceIndex = nullIndex - 4;
            this.moveNullToIndex(sourceIndex, nullIndex);
            return true;
        }
    }
    moveLeft() {
        const nullIndex = this.getNullIndex();
        if (nullIndex % 4 !== 3) {
            const sourceIndex = nullIndex + 1;
            this.moveNullToIndex(sourceIndex, nullIndex);
            return true;
        }
    }
    moveRight() {
        const nullIndex = this.getNullIndex();
        if (nullIndex % 4 !== 0) {
            const sourceIndex = nullIndex - 1;
            this.moveNullToIndex(sourceIndex, nullIndex);
            return true;
        }
    }
    moveTile(index) {
        const nullIndex = this.getNullIndex();
        switch (nullIndex) {
            case index - 4:
                this.move(_defs__WEBPACK_IMPORTED_MODULE_2__["DIRECTION_UP"]);
                break;
            case index + 4:
                this.move(_defs__WEBPACK_IMPORTED_MODULE_2__["DIRECTION_DOWN"]);
                break;
            case index - 1:
                this.move(_defs__WEBPACK_IMPORTED_MODULE_2__["DIRECTION_LEFT"]);
                break;
            case index + 1:
                this.move(_defs__WEBPACK_IMPORTED_MODULE_2__["DIRECTION_RIGHT"]);
                break;
        }
    }
}
BoardService.ɵfac = function BoardService_Factory(t) { return new (t || BoardService)(); };
BoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BoardService, factory: BoardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/game/defs.ts":
/*!******************************!*\
  !*** ./src/app/game/defs.ts ***!
  \******************************/
/*! exports provided: DIRECTION_UP, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, keyToDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_UP", function() { return DIRECTION_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_DOWN", function() { return DIRECTION_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_LEFT", function() { return DIRECTION_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_RIGHT", function() { return DIRECTION_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyToDirection", function() { return keyToDirection; });
const DIRECTION_UP = 'up';
const DIRECTION_DOWN = 'down';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const keyToDirection = {
    ArrowUp: DIRECTION_UP,
    ArrowDown: DIRECTION_DOWN,
    ArrowLeft: DIRECTION_LEFT,
    ArrowRight: DIRECTION_RIGHT,
};


/***/ }),

/***/ "./src/app/game/m/m.module.ts":
/*!************************************!*\
  !*** ./src/app/game/m/m.module.ts ***!
  \************************************/
/*! exports provided: MyHammerConfig, MModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MModule", function() { return MModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board/board.component */ "./src/app/game/board/board.component.ts");
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state.component */ "./src/app/game/state/state.component.ts");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tile/tile.component */ "./src/app/game/tile/tile.component.ts");
/* harmony import */ var _warper_warper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../warper/warper.component */ "./src/app/game/warper/warper.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");









class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_6__["DIRECTION_ALL"] },
        };
    }
}
class MModule {
}
MModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MModule, bootstrap: [_warper_warper_component__WEBPACK_IMPORTED_MODULE_5__["WarperComponent1"]] });
MModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MModule_Factory(t) { return new (t || MModule)(); }, providers: [
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MModule, { declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"],
        _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__["TileComponent"],
        _state_state_component__WEBPACK_IMPORTED_MODULE_3__["StateComponent"],
        _warper_warper_component__WEBPACK_IMPORTED_MODULE_5__["WarperComponent1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"],
                    _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__["TileComponent"],
                    _state_state_component__WEBPACK_IMPORTED_MODULE_3__["StateComponent"],
                    _warper_warper_component__WEBPACK_IMPORTED_MODULE_5__["WarperComponent1"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerModule"],
                ],
                providers: [
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"],
                        useClass: MyHammerConfig
                    },
                ],
                bootstrap: [_warper_warper_component__WEBPACK_IMPORTED_MODULE_5__["WarperComponent1"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/game/state/state.component.ts":
/*!***********************************************!*\
  !*** ./src/app/game/state/state.component.ts ***!
  \***********************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _board_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board/board.service */ "./src/app/game/board/board.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function StateComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.boardService.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start Game\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StateComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.rout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " return to main ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StateComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.boardService.initGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stop Game\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Moves: ", ctx_r3.boardService.movesCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time elapsed: ", ctx_r3.boardService.elapsedSeconds, "");
} }
function StateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Congratulations! You did it in ", ctx_r4.boardService.movesCount, " moves and ", ctx_r4.boardService.elapsedSeconds, " seconds!");
} }
class StateComponent {
    constructor(boardService, router) {
        this.boardService = boardService;
        this.router = router;
    }
    ngOnInit() {
    }
    rout() {
        this.router.navigate(['/all-games']);
    }
}
StateComponent.ɵfac = function StateComponent_Factory(t) { return new (t || StateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateComponent, selectors: [["app-state"]], decls: 5, vars: 5, consts: [["class", "start", 3, "click", 4, "ngIf"], ["class", "return", 3, "click", 4, "ngIf"], ["class", "stop", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "start", 3, "click"], [1, "return", 3, "click"], [1, "stop", 3, "click"]], template: function StateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StateComponent_button_0_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StateComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StateComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StateComponent_div_3_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StateComponent_div_4_Template, 3, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.boardService.isInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.boardService.isInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boardService.isInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boardService.isInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boardService.finished);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid;\n  background: white;\n  display: inline-block;\n  padding: 1em;\n  margin-right: 2em;\n}\n[_nghost-%COMP%]   .start[_ngcontent-%COMP%] {\n  color: green;\n  border-color: darkseagreen;\n}\n[_nghost-%COMP%]   .return[_ngcontent-%COMP%] {\n  color: red;\n  border-color: black;\n}\n[_nghost-%COMP%]   .stop[_ngcontent-%COMP%] {\n  color: darkred;\n  border-color: mistyrose;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9zdGF0ZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGFuZ3VsYXIgZ2FtZVxcZ2FtZXMvc3JjXFxhcHBcXGdhbWVcXHN0YXRlXFxzdGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9zdGF0ZS9zdGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FES0U7RUFDRSxxQkFBQTtBQ0hKO0FETUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3N0YXRlL3N0YXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgfVxyXG5cclxuICAuc3RhcnQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrc2VhZ3JlZW47XHJcbiAgfVxyXG4gIC5yZXR1cm4ge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5zdG9wIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBtaXN0eXJvc2U7XHJcbiAgfVxyXG5cclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG46aG9zdCAuc3RhcnQge1xuICBjb2xvcjogZ3JlZW47XG4gIGJvcmRlci1jb2xvcjogZGFya3NlYWdyZWVuO1xufVxuOmhvc3QgLnJldHVybiB7XG4gIGNvbG9yOiByZWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG46aG9zdCAuc3RvcCB7XG4gIGNvbG9yOiBkYXJrcmVkO1xuICBib3JkZXItY29sb3I6IG1pc3R5cm9zZTtcbn1cbjpob3N0IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-state',
                templateUrl: './state.component.html',
                styleUrls: ['./state.component.scss']
            }]
    }], function () { return [{ type: _board_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/tile/tile.component.ts":
/*!*********************************************!*\
  !*** ./src/app/game/tile/tile.component.ts ***!
  \*********************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TileComponent {
    constructor() { }
    ngOnInit() {
    }
}
TileComponent.ɵfac = function TileComponent_Factory(t) { return new (t || TileComponent)(); };
TileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileComponent, selectors: [["app-tile"]], inputs: { value: "value", index: "index" }, decls: 2, vars: 1, consts: [[1, "container"]], template: function TileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value ? ctx.value : "\u00A0", "\n");
    } }, styles: ["[_nghost-%COMP%] {\n  border: 1px dotted #0b0c0c;\n  color: gray;\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n}\n\n.container[_ngcontent-%COMP%] {\n  color: #2310cf;\n  display: inline-block;\n  font-family: sans-serif;\n  font-size: 40px;\n  width: 100%;\n  line-height: 150px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS90aWxlL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcYW5ndWxhciBnYW1lXFxnYW1lcy9zcmNcXGFwcFxcZ2FtZVxcdGlsZVxcdGlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS90aWxlL3RpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS90aWxlL3RpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYm9yZGVyOiAxcHggZG90dGVkIHJnYigxMSwgMTIsIDEyKTtcclxuICBjb2xvcjogZ3JheTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGNvbG9yOiByZ2IoMzUsIDE2LCAyMDcpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCAjMGIwYzBjO1xuICBjb2xvcjogZ3JheTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBjb2xvcjogIzIzMTBjZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tile',
                templateUrl: './tile.component.html',
                styleUrls: ['./tile.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/game/warper/warper.component.ts":
/*!*************************************************!*\
  !*** ./src/app/game/warper/warper.component.ts ***!
  \*************************************************/
/*! exports provided: WarperComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarperComponent1", function() { return WarperComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_game_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/game/defs */ "./src/app/game/defs.ts");
/* harmony import */ var _board_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board/board.service */ "./src/app/game/board/board.service.ts");
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state.component */ "./src/app/game/state/state.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../board/board.component */ "./src/app/game/board/board.component.ts");






class WarperComponent1 {
    constructor(boardService) {
        this.boardService = boardService;
    }
    ngOnInit() {
        this.boardService.initGame();
    }
    handleKeyboardEvent(event) {
        if (this.boardService.isInProgress()) {
            switch (event.key) {
                case 'r':
                    this.boardService.initGame();
                    return;
            }
            const direction = src_app_game_defs__WEBPACK_IMPORTED_MODULE_1__["keyToDirection"][event.key];
            if (direction) {
                this.boardService.move(direction);
            }
        }
        else {
            switch (event.key) {
                case 's':
                    this.boardService.startGame();
                    break;
                case 'S':
                    this.boardService.startGame([
                        1, 2, 3, 4,
                        5, 6, 7, 8,
                        9, 10, 11, 12,
                        null, 13, 14, 15
                    ]);
                    break;
            }
        }
    }
}
WarperComponent1.ɵfac = function WarperComponent1_Factory(t) { return new (t || WarperComponent1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"])); };
WarperComponent1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarperComponent1, selectors: [["app-warper1"]], hostBindings: function WarperComponent1_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function WarperComponent1_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 9, vars: 0, consts: [["id", "background"], ["id", "center"]], template: function WarperComponent1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fifteen Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-state");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_state_state_component__WEBPACK_IMPORTED_MODULE_3__["StateComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"]], styles: ["[_nghost-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  #background[_ngcontent-%COMP%]{background-image: url('puzzel2.jpg');\r\n    position: fixed;\r\n    top: 0; \r\n    left: 0;\r\n    \r\n    min-width: 100%;\r\n    min-height: 100%;}\r\n  #center[_ngcontent-%COMP%]{margin-left:32% ;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS93YXJwZXIvd2FycGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7RUFDQSxZQUFZLG9DQUFzRDtJQUNoRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQixDQUFDO0VBQ2pCLFFBQVEsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3dhcnBlci93YXJwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgI2JhY2tncm91bmR7YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcHV6emVsMi5qcGcpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwOyBcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAvKiBQcmVzZXJ2ZSBhc3BldCByYXRpbyAqL1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTt9XHJcbiAgICAjY2VudGVye21hcmdpbi1sZWZ0OjMyJSA7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarperComponent1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-warper1',
                templateUrl: './warper.component.html',
                styleUrls: ['./warper.component.css']
            }]
    }], function () { return [{ type: _board_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"] }]; }, { handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/s/s1.service.ts":
/*!*********************************!*\
  !*** ./src/app/s/s1.service.ts ***!
  \*********************************/
/*! exports provided: S1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1Service", function() { return S1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class S1Service {
    constructor(http) {
        this.http = http;
        this.first_time = false;
        this.yourturn = false;
        this.activate = true;
        this.isPaused = true;
        this.choose_game = '';
        if (localStorage.length) {
            console.log(localStorage.length);
            this.getUserData(localStorage.getItem('user'));
            console.log(this.player_details);
        }
        this.httpGet(`http://localhost:3000/profils-co/findAll`)
            .subscribe((result) => {
            this.profiles = result;
            console.log(this.profiles);
            // console.log(this.arr1[0].id);
        });
    }
    updeate_wins(id, wins) {
        this.http.put(`http://localhost:3000/profils-co/edit/${id}`, { wins: wins + 1 }).subscribe(() => {
            this.refreshP(id);
            this.first_time = true;
        });
    }
    // updeate(id) {
    //   this.httpGet(`http://localhost:8080/tic-tac-data.json?id=${id}&playr=${this.chose_x_or_o}&name=${this.player_details.name}`)
    //   .subscribe((result) => {
    //     this.arr1 = result
    //     console.log(this.arr1);
    //     console.log(this.arr1[0].id);
    //     console.log("updeate working");
    //     this.isPaused = false
    //   })
    // }
    refresh() {
        this.httpGet(`http://localhost:8080/profile.json`)
            .subscribe((result) => {
            this.profiles = result;
            console.log(this.profiles);
            // console.log(this.arr1[0].id);
        });
    }
    refreshP(id) {
        this.http.get(`http://localhost:3000/profils-co/findOne/${id}`)
            .subscribe((result) => {
            this.player_details = result;
            console.log(this.player_details);
        });
    }
    newregister(name, p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.post('http://localhost:3000/profils-co/create', { Name: name, password: p, wins: 0 }).subscribe((r) => {
                this.player_details = r;
                console.log(this.player_details);
                this.getToken(this.player_details.password);
            });
        });
    }
    getToken(password) {
        localStorage.clear();
        localStorage.setItem(`user`, password);
    }
    getTokenlogin(password) {
        this.http.get('http://localhost:3000/profils-co/creattoken').subscribe((r) => {
            this.player_details.password = r;
            this.getToken(this.player_details.password);
        });
    }
    httpGet(url) {
        return this.http.get(url);
    }
    getUserData(password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(password);
            yield this.http.get(`http://localhost:3000/profils-co/findOne/token/${password}`).subscribe((r) => {
                console.log(r);
                this.player_details = r;
                console.log(this.player_details.Name);
            });
        });
    }
    getUserDatalogin(password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(password);
            yield this.http.get(`http://localhost:3000/profils-co/findOne/token/login/${password}`).subscribe((r) => {
                console.log(r);
                this.player_details = r;
                console.log(this.player_details.Name);
                this.getToken(this.player_details.password);
            });
        });
    }
}
S1Service.ɵfac = function S1Service_Factory(t) { return new (t || S1Service)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
S1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: S1Service, factory: S1Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](S1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\angular game\games\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map