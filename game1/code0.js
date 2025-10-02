gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDPlantObjects1= [];
gdjs.Game_32SceneCode.GDPlantObjects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32SceneCode.GDWallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects1Objects = Hashtable.newFrom({"Plant": gdjs.Game_32SceneCode.GDPlantObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Game_32SceneCode.GDPlantObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32SceneCode.GDWallObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects1Objects, false);
}
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
