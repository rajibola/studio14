import { ICard } from "../../components/Card";

interface IData extends ICard {
  id: string;
}
export const CustomCardData: IData[] = [
  {
    type: "attachment",
    title: "The ultimate guide to Workplace Chat",
    subtitle: "The Guide to Workplace Chat",
    tag: "Secure Base",
    color: "red",
    id: "1",
  },
  {
    type: "video",
    title: "The ultimate guide to Workplace Chat",
    subtitle: "The Guide to Workplace Chat",
    tag: "Secure Base",
    color: "green",
    id: "2",
  },
  {
    type: "attachment",
    title: "The ultimate guide to Workplace Chat",
    subtitle: "The Guide to Workplace Chat",
    tag: "Secure Base",
    color: "red",
    id: "3",
  },
  {
    type: "video",
    title: "The ultimate guide to Workplace Chat",
    subtitle: "The Guide to Workplace Chat",
    tag: "Secure Base",
    color: "orange",
    id: "4",
  },
  {
    type: "pdf",
    title: "The ultimate guide to Workplace Chat",
    subtitle: "The Guide to Workplace Chat",
    tag: "Secure Base",
    color: "yellow",
    id: "5",
  },
  {
    type: "pdf",
    title: "The ultimate guide to Workplace Chat",
    subtitle: "The Guide to Workplace Chat",
    tag: "Secure Base",
    color: "lightBlue",
    id: "6",
  },
];
