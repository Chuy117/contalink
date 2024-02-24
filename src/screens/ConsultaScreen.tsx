import React, { useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Header } from '../components/Header';
import { InstructionsSection } from '../components/InstructionsSection';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { Button } from '../components/Button';
import facturas from '../services/consultarAPI';
import { Facturas, Invoice } from '../interfaces/facturasInterface';
import moment from 'moment';
import { ActIndicator } from '../components/ActIndicator';

export const ConsultaScreen = () => {

    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    const [hideCal, setHideCal] = useState(true);
    const [loader, setLoader] = useState(false);
    const [listFacturas, setListFacturas] = useState<Invoice[]>([]);

    const hideCalendar = () => {
        setHideCal(!hideCal);
        setListFacturas([]);
        setStartDate(dayjs());
        setEndDate(dayjs());
    }

    const facturasGet = async () => {

        setLoader(true);

        const resp = await facturas.get<Facturas>('', { headers: { 'x-api-key': 'Yqb8gS23D65GyGqLtikud7JfPKPLGupG3DT0Tx7J' }, params: { start_date: moment(startDate.toString()).format('YYYY-MM-DD'), end_date: moment(endDate.toString()).format('YYYY-MM-DD') } });

        setListFacturas(resp.data.invoices);

        if (resp.data.statusCode !== 200) {
            Alert.alert('Ocurrió un problema con la consulta', '', [
                { text: 'OK', onPress: () => { } },
            ]);
        }

        if (resp.data.invoices.length === 0) {
            Alert.alert('No hay resultados', 'En este rango de fechas no se obtuvieron resultados', [
                { text: 'OK', onPress: () => { setListFacturas([]); setStartDate(dayjs()); setEndDate(dayjs()); } },
            ]);
        }

        setLoader(false);

    }

    const headList = () => {
        return (
            listFacturas.length !== 0 &&
            <View style={styles.sectionsSelect}>
                <View style={styles.viewPosition}>
                    <Text style={styles.textFlat}>ID</Text>
                    <Text style={styles.textFlat}>Fecha</Text>
                    <Text style={styles.textFlat}>No. factura</Text>
                    <Text style={styles.textFlat}>Status</Text>
                    <Text style={styles.textFlat}>Total</Text>
                </View>
            </View>
        )
    }

    const footList = () => {
        return (
            loader &&
            <View style={styles.flatPadding}>
                <ActIndicator />
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <Header title='Consultar facturas' />
            <InstructionsSection text='Seleccione un rango de fechas.' />

            {
                !hideCal ?
                    <></>
                    :
                    <Button text='Calendario' disabled={false} onPress={() => hideCalendar()} />
            }

            {
                !hideCal ?
                    <>
                        <DateTimePicker
                            mode='range'
                            startDate={startDate}
                            endDate={endDate}
                            selectedItemColor={'#2761ad'}
                            onChange={({ startDate, endDate }) => { setStartDate(startDate), setEndDate(endDate), console.log('date', startDate, endDate) }}
                        />
                        <Button text='Buscar' disabled={startDate?.toString() != '' && endDate?.toString() != '' && startDate?.toString() != endDate?.toString() ? false : true} onPress={() => { facturasGet(), hideCalendar() }} />
                    </>
                    :
                    <></>
            }

            {
                listFacturas && hideCal ?
                    <FlatList
                        style={{ flexGrow: 0 }}
                        data={listFacturas}
                        onEndReachedThreshold={0.5}
                        ListHeaderComponent={headList}
                        ListFooterComponent={footList}
                        renderItem={({ item }) =>
                            <>
                                <View style={styles.sectionsSelectList}>
                                    <View style={styles.viewPosition}>
                                        <Text style={styles.textFlatList}>{item.id}</Text>
                                        <Text style={styles.textFlatList}>{moment(item.invoice_date.toString()).format('YYYY-MM-DD')}</Text>
                                        <Text style={styles.textFlatList}>{item.invoice_number}</Text>
                                        <Text style={styles.textFlatList}>{item.status}</Text>
                                        <Text style={styles.textFlatList}>{item.total}</Text>
                                    </View>
                                </View>
                            </>
                        }
                    />
                    :
                    <></>
            }

        </View>
    )

}
