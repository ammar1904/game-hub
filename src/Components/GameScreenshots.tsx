import React from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  console.log(data);
  return <div>GameScreenShot</div>;
};

export default GameScreenshots;
