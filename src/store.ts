import { create } from "zustand";
import Category from "./entities/Category";

interface BudgetRange {
    min: number,
    max: number
}

export interface CaseQuery {
  category?: Category;
  budgetRange?: BudgetRange;
  status?: "placed"| "at work"| "pending completion"| "complete"| "cancelled"
}

interface CaseStore {
  caseQuery: CaseQuery;
  setCategory: (category: Category) => void;
  setBudgetRange: (budgetRange: BudgetRange) => void;
  setStatus: (status: "placed"| "at work"| "pending completion"| "complete"| "cancelled") => void;
}

const useCaseQueryStore = create<CaseStore>((set) => ({
  caseQuery: {} as CaseQuery,
  setCategory: (category) => set(store => ({caseQuery: {...store.caseQuery, category: category}})),
  setBudgetRange: (budgetRange) => set(store => ({caseQuery: {...store.caseQuery, budgetRange: budgetRange}})),
  setStatus: (status) => set(store => ({caseQuery: {...store.caseQuery, status: status}})),

}));

export default useCaseQueryStore;