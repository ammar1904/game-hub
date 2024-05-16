import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Grid, Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  console.log(game);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box padding="20px">
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <Box>
        <GameAttribute
          title="Platforms"
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Box>
    </Box>
  );
};

export default GameDetailPage;
