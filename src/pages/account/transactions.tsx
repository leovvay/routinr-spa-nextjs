import React from 'react';
import Head from 'next/head';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { DateTime } from 'luxon';

import { authGuardSSR, currencyFormat } from '@utils';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import { useChargesHistoryQuery } from '@store/services/purchases';

import SettingsNav from '@modules/account/components/SettingsNav';
import { AccountSettingsContainer } from '@modules/account/index.styled';
import { TableHeaderCell } from '@modules/account/transactions.styled';

function TransactionsHistory() {
  const { data } = useChargesHistoryQuery();
  return (
    <PageWrapper>
      <Head>
        <title>Transaction history | Routinr</title>
        <meta
          property="og:title"
          content="Transaction history | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <SettingsNav>
          <AccountSettingsContainer>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Routine</TableHeaderCell>
                    <TableHeaderCell align="right">Amount</TableHeaderCell>
                    <TableHeaderCell align="right">Date</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((charge) => (
                    <TableRow
                      key={charge.createdAt}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {charge.routineTitle}
                      </TableCell>
                      <TableCell align="right">
                        {currencyFormat(charge.amount)}
                      </TableCell>
                      <TableCell align="right">
                        {DateTime.fromMillis(
                          Number(charge.createdAt)
                        ).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccountSettingsContainer>
        </SettingsNav>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default TransactionsHistory;

export const getServerSideProps = authGuardSSR;
