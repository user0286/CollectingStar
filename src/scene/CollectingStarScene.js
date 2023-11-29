import Phaser from 'phaser'
export default class CollectingStarScene extends Phaser.Scene {
    constructor(){
        super('collecting-stars-scene')
    }



    // method init
    init(){
        this.platform = undefined
        this.player = undefined
    }


    // method preload
    preload(){
        this.load.image('ground', 'images/platform.png')
        this.load.image('star', 'images/star.png')
        this.load.image('sky', 'images/sky.png')
        this.load.image('bomb', 'images/bomb.png')


        this.load.spritesheet('dude', 'images/dude.png',
            { frameWidth: 32, frameHeight: 48}
        )
    }


    // method create
    create(){
        this.add.image(400, 300, 'sky')
        this.platform = this.physics.add.staticGroup()
        this.platform.create(600, 400, 'ground')
        this.platform.create(50, 250, 'ground')
        this.platform.create(750, 220, 'ground')
        this.platform.create(400, 568, 'ground').setScale(2).refreshbody()

        //Create player
        // this.player = this.physics.add.sprite(100, 450, 'dude')
        // this.player.setCollideWorldBounds(true)
        this.player = this.physics.add.sprite(100, 450, 'dude')
    }


    // method update
    update(){}
}