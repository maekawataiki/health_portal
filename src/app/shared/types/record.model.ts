import { Food } from './food.model';

export interface Record {
    _id?: string;
    owner: string;
    date: Date;
    data: any; // { 'food': FoodRecord[], 'activity': ActivityRecord[], 'sleep': SleepRecord[] }
}

export interface FoodRecord {
    food: Food;
    amount: string;
}
export const foodTimes = ["Anytime", "Breakfast", "Morning Snack", "Lunch", "Afternoon Snack", "Dinner", "After Dinner"];

export interface ActivityRecord {
    category: string;
    amount: string;
}
export const activityCategories = ["Weight", "Agility"]

export interface SleepRecord {
    category: Food;
    amount: string;
}
export const sleepCategories = ["REM", "Light", "Deep"]