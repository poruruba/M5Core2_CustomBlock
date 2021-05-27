
/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */

enum ExRotate{
    //% block="右回り"
    RIGHT,
    //% block="左回り"
    LEFT
}

enum ExDimension{
    //% block="X軸"
    X,
    //% block="Y軸"
    Y,
    //% block="Z軸"
    Z
}

enum ExDimension2d{
    //% block="X軸"
    X,
    //% block="Y軸"
    Y
}

enum ExRoll{
    //% block="ピッチ"
    PITCH,
    //% block="ロール"
    ROLL,
    //% block="ヨー"
    YAW
}

enum ExButton{
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="C",
    C
}

/**
 * カスタムブロック
 */
//% weight=100 color=#0fbc11 icon="\uf0fe"
namespace custom {
    /**
     * タッチ
     */ 
    //% block block="このスプライトが押されたとき"
    export function onPlayerTouched(callback: () => void): void{
    }

    /**
     * ボタン押下
     */ 
    //% block block="%btn が押されたとき"
    export function onButtonPressed(btn: ExButton, callback: () => void): void{
    }

    /**
     * 繰り返し
     */ 
    //% block block="%msec msecごとに実行する"
    //% msec.defl=100
    export function setInterval(msec: number, callback: () => void): void{
    }

    /**
     * コスチューム
     */ 
    //% block block="コスチュームを %name にする"
    //% name.defl="costume1"
    export function costume_change(name: string): void{
    }

    /**
     * 背景
     */ 
    //% block block="背景を %name にする"
    //% name.defl="background1"
    export function background_change(name: string): void{
    }

    /**
     * 表示
     */ 
    //% block block="表示する"
    export function player_on(): void{
    }

    /**
     * 非表示
     */ 
    //% block block="隠す"
    export function player_off(): void{
    }

    /**
     * 歩く
     */ 
    //% block block="X座標を %x ずつ、Y座標を %y ずつ変える"
    export function player_step(x: number, y: number): void{
    }

    /**
     * 移動
     */ 
    //% block block="X座標を %x 、Y座標を %y にする"
    export function player_goto(x: number, y: number): void{
    }

    /**
     * 回転
     */ 
    //% block block="%direction に %degree 度回す"
    export function player_rotate(direction: ExRotate, degree: number): void{
    }

    /**
     * 角度
     */ 
    //% block block="%degree 度に向ける"
    export function player_angle(degree: number): void{
    }

    /**
     * 音再生
     */ 
    //% block block="%name の音を鳴らす"
    //% name.defl="cat"
    export function sound_play(name: string): void{
    }

    /**
     * バイブレーション
     */ 
    //% block block="%duration msec震わせる"
    export function shock_play(duration: number): void{
    }

    /**
     * 傾き
     */ 
    //% block block="%axis の傾き"
    export function direction(axis: ExDimension): number {
        return 0;
    }

    /**
     * 加速度
     */ 
    //% block block="%acc の加速度"
    export function acceleration(acc: ExDimension): number {
        return 0;
    }

    /**
     * 回転角
     */ 
    //% block block="%roll の回転角"
    export function rolling(roll: ExRoll): number {
        return 0;
    }

    /**
     * LED
     */ 
    //% block block="LED %onoff"
    export function led_onoff(onoff: number): void {
    }

    /**
     * コンソール
     */ 
    //% block block="%message をコンソール出力"
    export function console_log(message: string): void {
    }

    /**
     * 現在位置
     */ 
    //% block block="%dimension"
    export function player_position(dimension: ExDimension2d): number {
        return 0;
    }

    /**
     * 現在角度
     */ 
    //% block block="向き"
    export function player_direction(): number {
        return 0;
    }
}
