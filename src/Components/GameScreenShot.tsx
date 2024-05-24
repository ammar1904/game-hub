import React from "react";
import useScreenShot from "../hooks/useScreenShot";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShot(gameId);
  console.log(data);
  return <div>GameScreenShot</div>;
};

export default GameScreenShot;
