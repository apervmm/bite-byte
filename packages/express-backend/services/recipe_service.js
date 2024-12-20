import mongoose from "mongoose";
import recipeModel from "../models/recipe.js";



function getRecipes(name, limit, offset) {
  if (name) {
      return recipeModel
          .find({ name: new RegExp(name, "i") })
          .sort({ createdAt: -1 }) 
          .limit(limit);
  }
  return recipeModel
      .find()
      .sort({ createdAt: -1 }) 
      .skip(offset)
      .limit(limit);
}


function findRecipeById(id) {
  return recipeModel.findById(id);
}

function addRecipe(recipe) {
  const recipeToAdd = new recipeModel(recipe);
  const promise = recipeToAdd.save();
  return promise;
}

function findReciepeByName(name) {
    return recipeModel.find({ name: name });
}

function findReciepesByIngridients(ingredients) {
    return recipeModel.find({ ingredients: { $all: ingredients } });
}

function findRecipeToDelete(id) {
  return recipeModel.findByIdAndDelete(id)
}


function getUserRecipes(userId) {
  return recipeModel.find({ user: userId });
}




export default {
    addRecipe,
    getRecipes,
    findRecipeById,
    findReciepeByName,
    findReciepesByIngridients,
    findRecipeToDelete,
    getUserRecipes,
};
