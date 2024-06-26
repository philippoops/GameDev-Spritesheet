import Matter from "matter-js";
import { Dimensions } from "react-native";
import Monster from "../components/Monster";
import Box from "../components/Box";
import Edges from "../components/Edges";
import Constants from "../Constants";

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.4;

  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;

  return {
    physics: { engine, world },
    Square: Box(
      world,
      "blue",
      //{ x: 100, y: 100 },
      { x: 55, y: Constants.SCREEN_HEIGHT - 115 },
      { height: 90, width: 60 }
    ),
    Candle: Box(
      world,
      "blue",
      { x: Constants.SCREEN_WIDTH - 40, y: Constants.SCREEN_HEIGHT - 115 },
      { height: 90, width: 60 }
    ),
    MonsterA: Monster(
      world,
      "blue",
      { x: 150, y: 300 },
      { height: 78, width: 50 },
      { label: "Monster", restitution: 0, frictionAir: 0 },
      { animType: "appear" }
    ),
    
    TopEdge: Edges(
      world,
      "red",
      { x: screenWidth / 2, y: 0 },
      { height: 30, width: screenWidth }
    ),
    LeftEdge: Edges(
      world,
      "red",
      { x: 0, y: screenHeight / 2 },
      { height: screenHeight, width: 30 }
    ),
    RightEdge: Edges(
      world,
      "red",
      { x: screenWidth, y: screenHeight / 2 },
      { height: screenHeight, width: 30 }
    ),
    BottomEdge: Edges(
      world,
      "red",
      { x: screenWidth / 2, y: screenHeight },
      { height: 30, width: screenWidth }
    ),
    
  };
};
