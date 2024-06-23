import { Heading, HeadingProps, Text } from "@chakra-ui/react";

type Props = {
  bold?: string;
  thin?: string;
};

export default function CustomHeading({
  bold,
  thin,
  ...rest
}: Props & HeadingProps) {
  return (
    <Heading {...rest}>
      {bold && (
        <Text as="span" fontWeight="bold" {...rest}>
          {bold}
        </Text>
      )}
      {thin && (
        <>
          {" "}
          <Text as="span" fontWeight="thin" {...rest}>
            {thin}
          </Text>
        </>
      )}
    </Heading>
  );
}
