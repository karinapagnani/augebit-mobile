import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Platform,
  StyleSheet
} from 'react-native';

const CursoScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const topicos = [
    { titulo: 'Módulo 1: Introdução à Produtividade', conteudo: 'O que é produtividade \n \n Diferença entre estar ocupado e ser produtivo \n \n Mitos sobre produtividade.' },
    { titulo: 'Módulo 2: Autoconhecimento e Diagnóstico', conteudo: 'Como você usa o seu tempo hoje? \n \n Rastreadores de tempo e autoavaliação \n \n Identificação de ladrões de tempo (e-mails, redes sociais, interrupções).' },
    { titulo: 'Módulo 3: Técnicas de Gestão do Tempo', conteudo: 'Matriz de Eisenhower (urgente vs importante) \n \nTécnica Pomodoro \n \nMétodo GTD (Getting Things Done)  \n \n Planejamento semanal e diário \n \n Checklist, blocos de tempo (time blocking), e agenda.' },
    { titulo: 'Módulo 4: Organização Pessoal e Ambiente de Trabalho', conteudo: 'Organização de e-mails e tarefas \n \nAmbiente físico e digital: como manter ordem e foco \n \nMultitarefa: quando evita-la, quando funciona.' },
    { titulo: 'Módulo final: Hábitos, Rotina e Sustentabilidade', conteudo: 'Como criar e manter hábitos produtivos \n \n Rotina matinal e final de expediente \n \n Lidar com imprevistos sem perder o controle \n \nEquilíbrio e pausas estratégicas' },
  ];

  const toggleTopico = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Curso de React Native</Text>
          <Text style={styles.description}>
            Aprenda a criar apps móveis usando React Native e suas principais bibliotecas.
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.detailText}>
            Carga horária: <Text style={styles.detailBold}>6 horas</Text>
          </Text>
          <Text style={[styles.detailText, styles.detailSpacing]}>
            Categoria: <Text style={styles.detailBold}>Finanças pessoais</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Participar</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Conteúdo do Curso</Text>

        {topicos.map((topico, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => toggleTopico(index)} style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{topico.titulo}</Text>
            </TouchableOpacity>

            {expandedIndex === index && (
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{topico.conteudo}</Text>
              </View>
            )}
          </View>
        ))}
        <Text style={styles.description}>
            Ao final do curso, o colaborador será capaz de:  
          </Text>
          <Text style={styles.description}>
            Priorizar tarefas com mais clareza
          </Text>
          <Text style={styles.description}>
           Usar técnicas práticas para manter o foco
          </Text>
          <Text style={styles.description}>
            Criar uma rotina de trabalho mais organizada e equilibrada.
          </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 24 : 0,
  },
  header: {
    marginBottom: 24,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7C3AED',
  },
  description: {
    fontSize: 16,
    color: '#4B5563',
    marginTop: 8,
  },
  details: {
    marginBottom: 24,
  },
  detailText: {
    fontSize: 14,
    color: '#374151',
  },
  detailBold: {
    fontWeight: '600',
  },
  detailSpacing: {
    marginTop: 4,
  },
  button: {
    backgroundColor: '#7C3AED',
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 24,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1F2937',
  },
  card: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardHeader: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: '#4B5563',
  },
});

export default CursoScreen;
