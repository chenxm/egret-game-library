//GreenSock - TypeScript 0.9 Ambient Declarations Version 1.1 (From www.CodeBelt.com)
//JavaScript Docs http://api.greensock.com/js/

interface IDispatcher {
    addEventListener(type:string, callback:Function, scope:Object, useParam?:boolean, priority?:number):void;
    removeEventListener(type:string, callback:Function):void;
}

//com.greensock.core
declare namespace core {
    export class Animation {
        data:any;
        static ticker:IDispatcher;
        timeline:SimpleTimeline;
        vars:Object;

        constructor(duration?:number, vars?:Object);

        delay(value:number):any;
        duration(value:number):any;
        eventCallback(type:string, callback?:Function, params?:any[], scope?:any):any;
        invalidate():any;
        kill(vars?:Object, target?:Object):any;
        pause(atTime?:any, suppressEvents?:boolean):any;
        paused(value?:boolean):any;
        play(from?:any, suppressEvents?:boolean):any;
        restart(includeDelay?:boolean, suppressEvents?:boolean):any;
        resume(from?:any, suppressEvents?:boolean):any;
        reverse(from?:any, suppressEvents?:boolean):any;
        reversed(value?:boolean):any;
        seek(time:any, suppressEvents?:boolean):any;
        startTime(value:number):any;
        time(value:number, suppressEvents?:boolean):any;
        timeScale(value:number):any;
        totalDuration(value:number):any;
        totalTime(time:number, suppressEvents?:boolean):any;
    }

    export class SimpleTimeline extends Animation {
        autoRemoveChildren:boolean;
        smoothChildTiming:boolean;

        constructor(vars?:Object);

        add(value:any, position?:any, align?:string, stagger?:number):any;
        insert(tween:any, time:any):any;
        render(time:number, suppressEvents?:boolean, force?:boolean):void;
    }
}

//com.greensock
declare class TweenLite extends core.Animation {
    static defaultEase:easing.Ease;
    static defaultOverwrite:string;
    static selector:any;
    target:Object;
    static ticker:IDispatcher;
    timeline:core.SimpleTimeline;
    vars:Object;

    constructor(target:Object, duration:number, vars:Object);

    static delayedCall(delay:number, callback:Function, params?:any[], scope?:any, useFrames?:boolean):TweenLite;
    static from(target:Object, duration:number, vars:Object):TweenLite;
    static fromTo(target:Object, duration:number, fromVars:Object, toVars:Object):TweenLite;
    static getTweensOf(target:Object):any[];
    invalidate():any;
    static killDelayedCallsTo(func:Function):void;
    static killTweensOf(target:Object, vars?:Object):void;
    static set(target:Object, vars:Object):TweenLite;
    static to(target:Object, duration:number, vars:Object):TweenLite;
}

declare class TweenMax extends TweenLite {
    static ticker:IDispatcher;

    constructor(target:Object, duration:number, vars:Object);

    static delayedCall(delay:number, callback:Function, params?:any[], scope?:any, useFrames?:boolean):TweenMax;
    static from(target:Object, duration:number, vars:Object):TweenMax;
    static fromTo(target:Object, duration:number, fromVars:Object, toVars:Object):TweenMax;
    static getAllTweens(includeTimelines?:boolean):any[];
    static getTweensOf(target:Object):any[];
    invalidate():any;
    static isTweening(target:Object):boolean;
    static killAll(complete?:boolean, tweens?:boolean, delayedCalls?:boolean, timelines?:boolean):void;
    static killChildTweensOf(parent:any, complete?:boolean):void;
    static killDelayedCallsTo(func:Function):void;
    static killTweensOf(target:Object, vars?:Object):void;
    static pauseAll(tweens?:boolean, delayedCalls?:boolean, timelines?:boolean):void;
    progress(value:number):any;
    repeat(value:number):any;
    repeatDelay(value:number):any;
    static resumeAll(tweens?:boolean, delayedCalls?:boolean, timelines?:boolean):void;
    static set(target:Object, vars:Object):TweenMax;
    static staggerFrom(targets:Object[], duration:number, vars:Object, stagger:number, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any[];
    static staggerFromTo(targets:Object[], duration:number, fromVars:Object, toVars:Object, stagger:number, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any[];
    static staggerTo(targets:Object[], duration:number, vars:Object, stagger:number, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any[];
    time(value:number, suppressEvents?:boolean):any;
    static to(target:Object, duration:number, vars:Object):TweenMax;
    totalDuration(value:number):any;
    totalProgress(value:number):any;
    updateTo(vars:Object, resetDuration?:boolean):any;
    yoyo(value?:boolean):any;
}

declare class TimelineLite extends core.SimpleTimeline {
    constructor(vars?:Object);

    add(value:any, position?:any, align?:string, stagger?:number):any;
    addLabel(label:string, position?:any):any;
    addPause(position?:any, callback?:Function, params?:any[], scope?:any):any;
    append(value:any, offsetOrLabel?:any):any;
    appendMultiple(tweens:any[], offsetOrLabel?:any, align?:string, stagger?:number):any;
    call(callback:Function, params?:any[], scope?:any, position?:any):any;
    clear(labels?:boolean):any;
    duration(value:number):any;
    exportRoot(vars?:Object, omitDelayedCalls?:boolean):TimelineLite;
    from(target:Object, duration:number, fromVars:Object, position?:any):any;
    fromTo(target:Object, duration:number, fromVars:Object, toVars:Object, position?:any):any;
    getChildren(nested?:boolean, tweens?:boolean, timelines?:boolean, ignoreBeforeTime?:number):any[];
    getLabelTime(label:string):number;
    getTweensOf(target:Object, nested?:boolean):any[];
    insert(value:any, timeOrLabel?:any):any;
    insertMultiple(tweens:any[], timeOrLabel?:any, align?:string, stagger?:number):any;
    invalidate():any;
    progress(value:number):any;
    remove(value:any):any;
    removeLabel(label:string):any;
    seek(position:any, suppressEvents?:boolean):any;
    shiftChildren(amount:number, adjustLabels?:boolean, ignoreBeforeTime?:number):any;
    staggerFrom(targets:any[], duration:number, vars:Object, stagger?:number, position?:any, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteScope?:any):any;
    staggerFromTo(targets:any[], duration:number, fromVars:Object, toVars:Object, stagger?:number, position?:any, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any;
    staggerTo(targets:any[], duration:number, vars:Object, stagger:number, position?:any, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any;
    stop():any;
    to(target:Object, duration:number, vars:Object, position?:any):any;
    usesFrames():Boolean;
}

declare class TimelineMax extends TimelineLite {
    constructor(vars?:Object);

    addCallback(callback:Function, position:any, params?:any[], scope?:any):TimelineMax;
    currentLabel(value?:string):any;
    getActive(nested?:boolean, tweens?:boolean, timelines?:boolean):any[];
    getLabelAfter(time:number):string;
    getLabelBefore(time:number):string;
    getLabelsArray():any[];
    invalidate():any;
    progress(value:number):any;
    removeCallback(callback:Function, timeOrLabel?:any):TimelineMax;
    repeat(value?:number):any;
    repeatDelay(value?:number):any;
    time(value:number, suppressEvents?:boolean):any;
    totalDuration(value:number):any;
    totalProgress(value:number):any;
    tweenFromTo(fromPosition:any, toPosition:any, vars?:Object):TweenLite;
    tweenTo(position:any, vars?:Object):TweenLite;
    yoyo(value?:boolean):any;
}

//com.greensock.easing
declare namespace easing {
    export interface Back {
        easeIn;
        easeInOut;
        easeOut;
    }
    export interface Bounce {
        easeIn;
        easeInOut;
        easeOut;
    }
    export interface Circ {
        easeIn;
        easeInOut;
        easeOut;
    }
    export interface Cubic {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
    export interface Ease {
        getRatio(p:number):number;
    }
    export interface EaseLookup {
        find(name:string):Ease;
    }
    export interface Elastic {
        easeIn;
        easeInOut;
        easeOut;
    }
    export interface Expo {
        easeIn;
        easeInOut;
        easeOut;
    }
    export interface Linear {
        ease:Linear;
        easeIn:Linear;
        easeInOut:Linear;
        easeNone:Linear;
        easeOut:Linear;
    }
    export interface Power0 {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
    export interface Power1 {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
    export interface Power2 {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
    export interface Power3 {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
    export interface Power4 {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
    export interface Quad {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
    export interface Quart {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
    export interface Quint {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
    export interface Sine {
        easeIn;
        easeInOut;
        easeOut;
    }
    export interface SlowMo {
        ease:SlowMo;

        SlowMo(linearRatio:number, power:number, yoyoMode:boolean);
        config(linearRatio:number, power:number, yoyoMode:boolean):SlowMo;
        getRatio(p:number):number;
    }
    export interface SteppedEase {
        config(steps:number):SteppedEase;
        getRatio(p:number):number;
    }
    export interface Strong {
        easeIn:Ease;
        easeInOut:Ease;
        easeOut:Ease;
    }
}
//com.greensock.plugins
declare namespace plugins {
    export interface BezierPlugin extends TweenPlugin {
        bezierThrough(values:any[], curviness?:number, quadratic?:boolean, correlate?:string, prepend?:Object, calcDifs?:boolean):Object;
        cubicToQuadratic(a:number, b:number, c:number, d:number):any[];
        quadraticToCubic(a:number, b:number, c:number):Object;
    }
    export interface ColorPropsPlugin extends TweenPlugin {

    }
    export interface CSSPlugin extends TweenPlugin {

    }
    export interface CSSRulePlugin extends TweenPlugin {
        getRule(selector:string):Object;
    }
    export interface EaselPlugin extends TweenPlugin {

    }
    export interface RaphaelPlugin extends TweenPlugin {

    }
    export interface RoundPropsPlugin extends TweenPlugin {

    }
    export interface ScrollToPlugin extends TweenPlugin {

    }
    export interface TweenPlugin {
        activate(plugins:any[]):boolean;
    }
}

//com.greensock.easing
declare namespace easing {
    export var Back:Back;
    export var Bounce:Bounce;
    export var Circ:Circ;
    export var Cubic:Cubic;
    export var Ease:Ease;
    export var EaseLookup:EaseLookup;
    export var Elastic:Elastic;
    export var Expo:Expo;
    export var Linear:Linear;
    export var Power0:Power0;
    export var Power1:Power1;
    export var Power2:Power2;
    export var Power3:Power3;
    export var Power4:Power4;
    export var Quad:Quad;
    export var Quart:Quart;
    export var Quint:Quint;
    export var Sine:Sine;
    export var SlowMo:SlowMo;
    export var SteppedEase:SteppedEase;
    export var Strong:Strong;
}

//com.greensock.plugins
declare namespace plugins {
    export var BezierPlugin:BezierPlugin;
    export var ColorPropsPlugin:ColorPropsPlugin;
    export var CSSPlugin:CSSPlugin;
    export var CSSRulePlugin:CSSRulePlugin;
    export var EaselPlugin:EaselPlugin;
    export var RaphaelPlugin:RaphaelPlugin;
    export var RoundPropsPlugin:RoundPropsPlugin;
    export var ScrollToPlugin:ScrollToPlugin;
    export var TweenPlugin:TweenPlugin;
}