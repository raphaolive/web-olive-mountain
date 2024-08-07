import { ReactNode } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  title: string;
};

export default function BasicPage({ children, title }: Props) {
  return (
    <Box as="main" minH="90vh" px={12}>
      <Box maxW="1380px" margin="auto">
        <Breadcrumb spacing="10px" my={10} separator={<BiChevronRight />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Catalogo</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" color="primary.400">
              {title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        {children}
      </Box>
    </Box>
  );
}
