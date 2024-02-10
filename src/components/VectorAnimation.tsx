import { Box } from "@chakra-ui/react";
import { interpolate } from "flubber";
import { tween } from "popmotion";
import { useEffect, useState } from "react";
import posed from "react-pose";

const paths: { [key: string]: string } = {
  vector1:
    "M282.131 33.7413C298.008 67.6722 244.692 92.6433 203.256 113.984C161.345 135.568 113.071 162.278 68.3979 143.815C14.4308 121.512 -15.1643 73.9188 7.90742 33.2502C28.1291 -2.39463 94.7817 -0.0340471 149.949 0.0647449C201.916 0.157805 266.114 -0.48752 282.131 33.7413Z",
  vector2:
    "M240.081 74.5599C253.903 109.393 239.634 146.183 223.901 180.217C207.521 215.647 189.525 254.518 151.961 265.174C112.494 276.369 70.182 259.872 39.6926 232.469C11.0946 206.767 -3.64505 167.914 1.315 129.779C5.68618 96.172 36.9639 77.1452 62.7581 55.1343C90.7985 31.2067 116.011 -3.36991 152.647 0.64353C192.579 5.01811 225.274 37.2439 240.081 74.5599Z",
  vector3:
    "M16.2736 43.9277C52.0691 -3.61569 112.129 0.462394 161.315 1.46729C211.064 2.48367 270.765 1.58422 269.979 49.111C269.03 106.525 222.621 177.614 157.879 209.294C101.134 237.06 69.6239 194.356 41.1363 161.088C14.3015 129.751 -19.8362 91.8886 16.2736 43.9277Z",
  vector4:
    "M241.627 203.573C192.161 236.662 136.802 213.016 90.6951 195.855C44.0616 178.498 -12.5999 159.67 3.80699 115.058C23.6273 61.1647 90.8738 9.34493 162.44 0.774682C225.165 -6.7369 240.839 43.9664 256.77 84.7648C271.776 123.196 291.527 170.194 241.627 203.573Z",
};

const morphTransition = ({ from, to }: { from: string; to: string }) =>
  tween({
    from: 0,
    to: 1,
  }).pipe(interpolate(from, to));

interface PathConfig {
  d: string;
  transition: ReturnType<typeof morphTransition>;
}

const Icon = posed.path(
  Object.keys(paths).reduce(
    (config: Record<string, PathConfig>, id, index, array) => {
      const fromPath =
        paths[array[index - 1]] || paths[array[array.length - 1]];
      const toPath = paths[id];

      config[id] = {
        d: paths[id],
        transition: morphTransition({ from: fromPath, to: toPath }),
      };
      return config;
    },
    {} as Record<string, PathConfig>
  )
);

interface Paths {
  [key: string]: string;
}

const VectorAnimation = ({ color }: { color: string }) => {
  const [pathIndex, setPathIndex] = useState<number>(0);
  const pathIds = Object.keys(paths) as Array<keyof Paths>;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = pathIndex + 1;
      setPathIndex(nextIndex >= pathIds.length ? 0 : nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [pathIndex]);

  return (
    <Box position="absolute" top="-120px" width="100%" right="-40px" zIndex="1">
      <svg
        style={{ zIndex: "0" }}
        width="400"
        height="400"
        viewBox="0 0 420 300"
      >
        <Icon pose={pathIds[pathIndex] as string} style={{ fill: color }} />
      </svg>
    </Box>
  );
};

export default VectorAnimation;
