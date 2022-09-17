package main

import (
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called at application startup
func (a *App) startup(ctx context.Context) {
	// Perform your setup here
	a.ctx = ctx
}

// domReady is called after the front-end dom has been loaded
func (a App) domReady(ctx context.Context) {
	// Add your action here
}

// shutdown is called at application termination
func (a *App) shutdown(ctx context.Context) {
	// Perform your teardown here
}

// 关闭窗口
func (a *App) CloseWind() {
	runtime.Quit(a.ctx)
}

// 窗口最大化
func (a *App) MaxWind() {
	runtime.WindowMaximise(a.ctx)
}

// 还原窗口
func (a *App) UnMaxWind() {
	runtime.WindowUnmaximise(a.ctx)
}

// 窗口最小化
func (a *App) MinWind() {
	runtime.WindowMinimise(a.ctx)
}

// get window positon
type Position struct {
	X int
	Y int
}

func (a *App) GetWindPosition() (p Position) {
	var x int
	var y int
	x, y = runtime.WindowGetPosition(a.ctx)
	p.X = x
	p.Y = y
	return p
}

// set wind position
func (a *App) SetWinPosition(p Position) {
	runtime.WindowSetPosition(a.ctx, p.X, p.Y)
}
